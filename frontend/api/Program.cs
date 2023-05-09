using System.Text.Json;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "dist",
});

builder.Services.AddHttpClient();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseResponseCaching();

app.Use(async (context, next) =>
{
    if (context.Request.Path != "/")
    {
        context.Response.GetTypedHeaders().CacheControl = new CacheControlHeaderValue()
        {
            Public = true,
            MaxAge = TimeSpan.FromSeconds(300),
        };

        context.Response.Headers[HeaderNames.Vary] = new string[] { "Accept-Encoding" };
    }
    await next();
});

app.MapGet("/", async () =>
{
    var path = Path.Combine(app.Environment.WebRootPath, "index.html");
    var template = await System.IO.File.ReadAllTextAsync(path);

    var file = template
        .Replace("_ID_", $"gaselle")
        .Replace("_PAGENAME_", $"Gaselle")
        .Replace("_PUBLISHED_", "2022-10-13T15:25:14Z")
        .Replace("_MODIFIED_", "2022-10-13T15:25:14Z")
        .Replace("_TITLE_", $"Gaselle")
        .Replace("_OG:URL_", $"https://www.dn.no/gaselle/")
        .Replace("_OG:IMAGE_", $"https://www.dn.no/gaselle/gaselle-2022.png")
        .Replace("_OG:TITLE_", $"Møt bedriftene som vokser mest i Norge og lær av deres erfaringer");

    return Results.Content(file, "text/html");
});

app.MapGet("/innovator", async () =>
{
    var path = Path.Combine(app.Environment.WebRootPath, "index.html");
    var template = await System.IO.File.ReadAllTextAsync(path);

    var file = template
        .Replace("_ID_", $"gaselle-innovator")
        .Replace("_PAGENAME_", $"Gaselle innovatør")
        .Replace("_PUBLISHED_", "2022-10-13T15:25:14Z")
        .Replace("_MODIFIED_", "2022-10-13T15:25:14Z")
        .Replace("_TITLE_", $"Gaselle Innovatør")
        .Replace("_OG:URL_", $"https://www.dn.no/gaselle/innovator/")
        .Replace("_OG:IMAGE_", $"https://www.dn.no/gaselle/gaselle-2022.png")
        .Replace("_OG:TITLE_", $"Årets gaselle-innovatør");

    return Results.Content(file, "text/html");
});

app.MapGet("/{id:int}", async (int id, IHttpClientFactory factory) =>
{
    var client = factory.CreateClient("gaselle");

    var host = "https://min-gaselle.dn.no";
    var res = await client.GetStringAsync($"{host}/api/gaselle/{id}");
    if (res == null) return Results.NotFound();

    var gaselle = JsonSerializer.Deserialize<GaselleModel>(res);
    if (gaselle == null) return Results.NotFound();

    var record = await client.GetStringAsync($"{host}/api/public/{id}");

    var path = Path.Combine(app.Environment.WebRootPath, "index.html");
    var template = await System.IO.File.ReadAllTextAsync(path);

    var file = template
        .Replace("window.gaselle = null;", $"window.gaselle = {res};")
        .Replace("_ID_", $"gaselle-{id}")
        .Replace("_PAGENAME_", $"Gaselle: {gaselle.Name}")
        .Replace("_TITLE_", $"Gaselle: {gaselle.Name}")
        .Replace("_OG:URL_", $"https://www.dn.no/gaselle/{id}/")
        .Replace("_OG:TITLE_", $"Gaselle: {gaselle.Name}, en av Norges raskest voksende og lønnsomme bedrifter");

    if (!string.IsNullOrWhiteSpace(record))
    {
        var profile = JsonSerializer.Deserialize<RecordModel>(record);

        if (profile != null)
        {
            file = file
                .Replace("window.profile = null;", $"window.profile = {record};")
                .Replace("_PUBLISHED_", profile.Published?.ToString("s"))
                .Replace("_MODIFIED_", profile.Modified?.ToString("s"));

            if (profile.Form.Image != null)
            {
                file = file.Replace("_OG:IMAGE_", $"https://www.dn.no/prosjekter/gaselle/images/{profile.Form.Image.FileId}-single.{profile.Form.Image.FileExt.Replace(".", "")}");
            }
        }
    }

    file = file
        .Replace("_OG:IMAGE_", $"https://www.dn.no/gaselle/gaselle-2022.png")
        .Replace("_PUBLISHED_", "2022-10-13T15:25:14Z")
        .Replace("_MODIFIED_", "2022-10-13T15:25:14Z");

    return Results.Content(file, "text/html");
});

var provider = new FileExtensionContentTypeProvider();
provider.Mappings.Add(".avif", "image/avif");

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider,
    FileProvider = new PhysicalFileProvider(app.Environment.WebRootPath),
    OnPrepareResponse = context =>
    {
        context.Context.Response.Headers.Append("Cache-Control", $"public, max-age=360");
    }
});

app.Run();