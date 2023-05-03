using System.Text.Json.Serialization;

public class FormModel
{
    [JsonPropertyName("image")]
    public BlobModel? Image { get; set; } = null;
}

public class BlobModel
{
    [JsonPropertyName("fileId")]
    public string FileId { get; set; } = "";

    [JsonPropertyName("fileExt")]
    public string FileExt { get; set; } = "";
}