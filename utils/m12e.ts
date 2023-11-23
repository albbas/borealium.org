/**
 * Fork of the multilanguage plugin that generates `/index.${lang}.html` files
 *
 * @see https://deno.land/x/lume@v1.17.5/plugins/multilanguage.ts
 */

import { Page } from "lume/core/filesystem.ts"
import { isPlainObject, merge } from "lume/core/utils.ts"
import { posix } from "lume/deps/path.ts"
import { getUrl } from "lume/core/source.ts"

import type { PageData, Plugin } from "lume/core.ts"

import { FluentBundle, FluentResource } from "npm:@fluent/bundle"

export interface Options {
  /** The list of extensions used for this plugin */
  extensions: string[]

  /** Available languages */
  languages: string[]

  /** A prefix-free language */
  defaultLanguage?: string

  /** Callback to adjust the URL to contain the language */
  urlProcessor?: (url: string, page: Page) => string
}

// Default options
export const defaults: Options = {
  extensions: [".html"],
  languages: [],
  urlProcessor: (url, page) => {
    const lang = page.data.lang
    if (!lang) {
      return url
    }
    return `${url}index.${lang}.html`
  },
}

export default function multilanguage(userOptions?: Partial<Options>): Plugin {
  const options = merge(defaults, userOptions)

  return (site) => {
    // Configure the merged keys
    const mergedKeys = site.scopedData.get("/")?.mergedKeys || {}
    options.languages.forEach((lang) => {
      mergedKeys[lang] = "object"
    })

    const enResource = new FluentResource(`
-brand-name = Divvun
welcome = Welcome to {-brand-name}!
`)

    const svResource = new FluentResource(`
-brand-name = Divvun
welcome = Välkomna till {-brand-name}!
`)

    const enBundle = new FluentBundle("en")
    enBundle.addResource(enResource)

    const svBundle = new FluentBundle("sv")
    svBundle.addResource(svResource)

    mergedKeys["fluentBundles"] = "object"

    site.data("fluentBundles", {
      en: enBundle,
      sv: svBundle,
    })

    site.data("mergedKeys", mergedKeys)

    // Preprocessor to setup multilanguage pages
    site.preprocess(options.extensions, (page, pages) => {
      const { data } = page
      const languages = data.lang as string | string[] | undefined

      // The "lang" variable of the pages must be an array
      if (!Array.isArray(languages)) {
        return
      }

      // Create a new page per language
      const newPages: Page[] = []
      const id: string = data.id || page.src.path.slice(1)
      const basePath: string = typeof page.data.url === "string" ? posix.dirname(page.data.url) : ""

      for (const lang of languages) {
        const newData: PageData = { ...data, lang, id }
        const newPage = page.duplicate(undefined, newData)
        newPages.push(newPage)

        // Fix the url
        const customUrl = newData[`url.${lang}`] || newData[lang]?.url

        if (customUrl) {
          newData.url = getUrl(newPage, site.options.prettyUrls, basePath)
        } else if (newData.url) {
          newData.url = options.urlProcessor!(newData.url, newPage)
        }
      }

      // Replace the current page with the multiple language versions
      pages.splice(pages.indexOf(page), 1, ...newPages)
    })

    // Preprocessor to process the multilanguage data
    site.preprocess(options.extensions, (page) => {
      const lang = page.data.lang

      if (typeof lang !== "string") {
        return
      }

      const data = filterLanguage(
        options.languages,
        lang,
        page.data,
      ) as PageData

      for (const key of options.languages) {
        if (key in data) {
          if (key === lang) {
            Object.assign(data, data[key])
          }
          delete data[key]
        }
      }

      page.data = data
    })

    // Preprocessor to (un)prefix all urls with the language code
    // site.preprocess(options.extensions, (page) => {
    //   const { lang } = page.data

    //   if (typeof lang !== "string") {
    //     return
    //   }

    //   const url = page.data.url as string | undefined

    //   if (!url) {
    //     return
    //   }

    //   if (!url.startsWith(`/${lang}/`) && lang !== options.defaultLanguage) {
    //     page.data.url = options.urlProcessor!(url, page)
    //   } else if (
    //     url.startsWith(`/${lang}/`) && lang === options.defaultLanguage
    //   ) {
    //     page.data.url = url.slice(lang.length + 1)
    //   }
    // })

    // Preprocessor to build the alternates object
    site.preprocess(options.extensions, (page, pages) => {
      const { data } = page
      const id = data.id as string | number | undefined

      if (data.alternates || !id) {
        return
      }

      const alternates: PageData[] = []
      const alternatePages = pages.filter((page) => page.data.id == id)

      options.languages.forEach((lang) => {
        const page = alternatePages.find((page) => page.data.lang === lang)

        if (page) {
          alternates.push(page.data)
          page.data.alternates = alternates
        }
      })
    })

    // Include automatically the <link rel="alternate"> elements
    // with the other languages
    site.process(options.extensions, (page) => {
      const { document } = page
      const alternates = page.data.alternates
      const lang = page.data.lang as string | undefined

      if (!document || !alternates || !lang) {
        return
      }

      // Include <html lang="${lang}"> attribute element if it's missing
      if (!document.documentElement?.getAttribute("lang")) {
        document.documentElement?.setAttribute("lang", lang)
      }

      // Insert the <link> elements automatically
      for (const data of alternates) {
        const meta = document.createElement("link")
        meta.setAttribute("rel", "alternate")
        meta.setAttribute("hreflang", data.lang)
        meta.setAttribute("href", site.url(data.url as string, true))
        document.head.appendChild(meta)
        document.head.appendChild(document.createTextNode("\n"))
      }
    })
  }
}

/**
 * Remove the entries from all "langs" except the "lang" value
 */
function filterLanguage(
  langs: string[],
  lang: string,
  data: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const [name, value] of Object.entries(data)) {
    const parts = name.match(/^(.*)\.([^.]+)$/)

    if (parts) {
      const [, key, l] = parts

      if (lang === l) {
        result[key] = value
        continue
      } else if (langs.includes(l)) {
        continue
      }
    }

    if (name in result) {
      continue
    }

    if (isPlainObject(value)) {
      result[name] = filterLanguage(langs, lang, value)
    } else if (Array.isArray(value)) {
      result[name] = value.map((item) => {
        return isPlainObject(item) ? filterLanguage(langs, lang, item) : item
      })
    } else {
      result[name] = value
    }
  }

  return result
}
