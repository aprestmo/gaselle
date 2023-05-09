export const structure = (S, context) =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Innstillinger')
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'siteSettings',
            // 'article',
            // 'tags',
            // 'author',
          ].includes(listItem.getId())
      ),
    ])
