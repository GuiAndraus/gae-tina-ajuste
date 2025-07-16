import { defineConfig } from "tinacms";

export default defineConfig({
  contentApiUrl: "http://localhost:4001/graphql",
  schema: {
    collections: [
      {
        name: "page",
        label: "Páginas",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título"
          },
          {
            type: "string",
            name: "body",
            label: "Corpo"
          }
        ]
      }
    ]
  }
});
