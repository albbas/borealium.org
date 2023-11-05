import { Page, PageData } from "lume/core.ts"
import { Navbar } from "~/_templates/_components/navbar.tsx"
import { script } from "~/_templates/layouts/lang-redir.tsx"
import { Footer } from "~/_templates/_components/footer.tsx"

export default function BasePage(page: PageData) {
  const { title, children, lang, url, originalUrl } = page

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/index.css" />
        {script(`
          if (document.documentElement.hasAttribute("lang")) {
            localStorage.setItem("borealium:language", document.documentElement.getAttribute("lang"))
          }
        `)}
        {script(`
          const pagefind = await import("/pagefind/pagefind.js")

          async function searchResults(query, limit) {
            const search = await pagefind.debouncedSearch(query)
            if (search == null) {
              return null
            }
            const results = await Promise.all(search.results.map(x => x.data()))
            const filtered = results.map(x => ({
              url: x.url,
              title: x.meta.title,
              category: x.filters.category?.[0],
              languages: x.filters.language ?? [],
              type: x.filters.type?.[0]
            }))
            
            if (limit != null) {
              return filtered.slice(0, limit)
            }

            return filtered
          }

          console.log("Search loaded")
          window.pagefind = pagefind

          async function attach() {
            let debounceId
            
            document.querySelector("#search").addEventListener("input", async (e) => {
              const thisDebounceId = +new Date()
              debounceId = thisDebounceId
              const results = await searchResults(e.target.value, 5)
              if (thisDebounceId === debounceId) {
                console.log(results)
              }
            })

            const element = document.querySelector("#search-results")
            if (element != null) {
              element.innerText = JSON.stringify(await searchResults(new URLSearchParams(location.search).get('q')), null, 2)
            }
          }

          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", attach)
          } else {
            attach()
          }
        `)}
      </head>
      <body id="top">
        <Navbar url={originalUrl || url || "/"} />
        <div className="navbar-offset-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
