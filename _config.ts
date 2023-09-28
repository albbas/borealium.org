import lume from "lume/mod.ts"
import jsx from "lume/plugins/jsx.ts"
import metas from "lume/plugins/metas.ts"
import sass from "lume/plugins/sass.ts"
import sitemap from "lume/plugins/sitemap.ts"
import pagefind from "lume/plugins/pagefind.ts"
import nav from "lume/plugins/nav.ts"
import esbuild from "lume/plugins/esbuild.ts"
import mdx from "lume/plugins/mdx.ts"
import slugifyUrls from "lume/plugins/slugify_urls.ts"

import { getCategoryData } from "~plugins/category-data.ts"
import { getLanguageData } from "~plugins/language-data.ts"
import multilanguage from "~plugins/multilang.ts"
import fluent from "~plugins/fluent.ts"
import outline from "~plugins/outline.ts"
import search from "lume/plugins/search.ts"
import excerpt from "~plugins/excerpt.ts"

// console.log(getCategoryData())
// Deno.exit()
const site = lume({
  src: "./src",
  includes: "_templates",
})

site.loadData([".yaml", ".yml"])

site.use(slugifyUrls())

const languages = getLanguageData()

site.use(excerpt())
site.use(search({ returnPageData: true }))
site.use(multilanguage(languages))
site.use(fluent(languages))
site.use(outline())
site.use(jsx())
site.use(mdx({}))
// site.use(metas())
site.use(sass())
site.use(nav())
site.use(sitemap())
site.use(pagefind({
  indexing: {
    verbose: true,
  },
  ui: false,
}))
site.use(esbuild({
  extensions: [".client.ts"],
}))

site.copy("_static", "static")

export default site
