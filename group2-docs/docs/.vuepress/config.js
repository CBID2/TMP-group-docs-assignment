import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
	lang: "en-US",

	title: "VuePress",
	description: "My first VuePress Site",

	theme: defaultTheme({
		logo: "https://vuejs.press/images/hero.png",

		navbar: [
			"/",
			"/get-started",
			"/tutorials",
			"/guides",
			"/om-functions",
			"/resources",
			"/changelog",
		],
		editLink: true,
		editLinkText: "Edit this page on GitHub",
		docsRepo: "CBID2/TMP-group-docs-assignment-1",
		docsDir: "group2-docs/docs",
		docsBranch: "main",
	}),

	bundler: viteBundler(),
});
