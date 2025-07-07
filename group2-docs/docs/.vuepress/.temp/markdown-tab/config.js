import { CodeTabs } from "/Users/ileolami/Documents/GitHub/Product-docs-cohort-2/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/ileolami/Documents/GitHub/Product-docs-cohort-2/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/ileolami/Documents/GitHub/Product-docs-cohort-2/group2-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
