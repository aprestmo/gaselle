export default {
  name: "frontPage",
  type: "document",
  title: "Forsiden",
  fields: [
    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { type: "block" }
      ]
    }
  ]
}