export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "624808e9a5c73d245848dadc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-oiyczzxe",
                  apiId: "fc6648f3-4663-40eb-9e34-a28c96a72f76",
                },
                {
                  buildHookId: "624808ea9559c322bbeedc03",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yirwby55",
                  apiId: "9d3c0699-394a-487a-93f4-e10afafd3f81",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/axemrangers/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yirwby55.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
