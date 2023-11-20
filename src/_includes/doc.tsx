import { PageData } from "lume/core.ts"
import { FluentPage } from "~plugins/fluent.ts"

type BlogProps = {
  title: string
  slug: string
  author: string
  date: string
  content: string
  layout: string
}

export const layout = "base.tsx"

export default function DocLayout(page: PageData & BlogProps & FluentPage) {
  const { title, slug, author, date, layout, content, t } = page

  return (
    <article className="doc" data-pagefind-filter={`type:doc`}>
      <nav className="toc">
        <ol id="toc"></ol>
        <div style={{ height: "64px" }} />
        <a href="#top" className="back-to-top">{t("back-to-top")}</a>
      </nav>
      <div className="content">
        <header>
          <h1>{title}</h1>
        </header>
        <section data-toc-context>
          {content}
        </section>
      </div>
    </article>
  )
}
