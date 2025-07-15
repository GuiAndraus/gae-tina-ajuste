import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/",
          filePath: "index.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text" },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "About",
          type: "page", 
          urlPath: "/about",
          filePath: "about.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "Services",
          type: "page",
          urlPath: "/services", 
          filePath: "services.html",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "services", type: "list", items: { type: "object", fields: [
              { name: "name", type: "string" },
              { name: "description", type: "text" }
            ]}}
          ]
        },
        {
          name: "Contact",
          type: "page",
          urlPath: "/contact",
          filePath: "contact.html", 
          fields: [
            { name: "title", type: "string", required: true },
            { name: "phone", type: "string" },
            { name: "email", type: "string" },
            { name: "address", type: "text" }
          ]
        }
      ],
    })
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");
    
    return documents
      .filter((d) => pageModels.some(m => m.name === d.modelName))
      .map((document) => {
        let urlPath = "/";
        
        switch (document.modelName) {
          case 'Page':
            urlPath = "/";
            break;
          case 'About':
            urlPath = "/about";
            break;
          case 'Services':
            urlPath = "/services";
            break;
          case 'Contact':
            urlPath = "/contact";
            break;
          default:
            urlPath = `/${document.modelName.toLowerCase()}`;
        }

        return {
          stableId: document.id,
          urlPath: urlPath,
          document,
          isHomePage: document.modelName === 'Page',
        };
      });
  }
});

