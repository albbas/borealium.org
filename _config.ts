import lume from "lume/mod.ts"
import jsx from "lume/plugins/jsx.ts"
import mdx from "lume/plugins/mdx.ts"
import sass from "lume/plugins/sass.ts"
// import sitemap from "lume/plugins/sitemap.ts"
import pagefind from "lume/plugins/pagefind.ts"
import nav from "lume/plugins/nav.ts"
import slugifyUrls from "lume/plugins/slugify_urls.ts"
import favicon from "lume/plugins/favicon.ts"

import multilanguage from "~plugins/multilang.ts"
import fluent, { init as initFluent } from "~plugins/fluent.ts"
import outline from "~plugins/outline.ts"
import search from "lume/plugins/search.ts"
import excerpt from "~plugins/excerpt.ts"

const site = lume({
  src: "./src",
})

initFluent()

site.loadData([".yaml", ".yml"])

site.use(slugifyUrls())
site.use(favicon())
site.use(excerpt())
site.use(search({ returnPageData: true }))
site.use(jsx())
site.use(mdx({}))
site.use(sass())
site.use(nav())
// site.use(sitemap())
site.use(multilanguage())
site.use(fluent())
site.use(outline())
site.use(pagefind({
  indexing: {
    verbose: false,
  },
  ui: false,
}))

site.copy("_static", "static")

export default site
