using System.Text.Json.Serialization;

public class GaselleModel
{
    [JsonPropertyName("name")]
    public string Name { get; set; } = "";
}