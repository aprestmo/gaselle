using System.Text.Json.Serialization;

public class RecordModel
{
    [JsonPropertyName("published")]
    public DateTime? Published { get; set; } = null;

    [JsonPropertyName("modified")]
    public DateTime? Modified { get; set; } = null;

    [JsonPropertyName("form")]
    public FormModel Form { get; set; } = new FormModel();
}