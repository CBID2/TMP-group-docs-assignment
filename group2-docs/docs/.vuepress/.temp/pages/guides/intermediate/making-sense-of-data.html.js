import comp from "C:/Users/DDR3/Desktop/Product-docs-cohort-1/group2-docs/docs/.vuepress/.temp/pages/guides/intermediate/making-sense-of-data.html.vue"
const data = JSON.parse("{\"path\":\"/guides/intermediate/making-sense-of-data.html\",\"title\":\"Making sense of Data\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Making sense of Data\",\"description\":\"This page will guide you on how to install openmadness\"},\"headers\":[{\"level\":3,\"title\":\"Example: Sum\",\"slug\":\"example-sum\",\"link\":\"#example-sum\",\"children\":[]},{\"level\":3,\"title\":\"Example: Mean (Average)\",\"slug\":\"example-mean-average\",\"link\":\"#example-mean-average\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guides/intermediate/making-sense-of-data.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
