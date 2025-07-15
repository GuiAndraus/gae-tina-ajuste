export default {
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  contentSources: [
    {
      name: "git",
      type: "git",
      rootPath: ".",
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
        }
      ]
    }
  ],
  siteMap: () => {
    return [
      {
        stableId: "home",
        urlPath: "/",
        document: { modelName: "Page", id: "home" },
        isHomePage: true,
      }
    ];
  }
};

