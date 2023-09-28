import { Page } from "lume/core.ts"
import { Resource } from "~types/resource.ts"
import { ResourceSummary } from "~/_templates/_components/resource-summary.tsx"

export const layout = "layouts/base.tsx"

type LanguageIndexProps = {
  resources: Resource[]
}

export default function LanguageIndexLayout(page: Page & LanguageIndexProps) {
  const { resources, languageId, language } = page

  // console.log(category)
  // Deno.exit(1)

  return (
    <div
      data-language={languageId}
      data-type="language-index"
      data-pagefind-filter="type[data-type], language[data-language]"
      className="category-index"
    >
      <div className="content">
        <div>
          <h1>{language.name}</h1>
          <p>
            {/* {category["en"].description} */}
          </p>
        </div>
        <div className="results" data-pagefind-ignore>
          {resources.length === 0 && (
            <div>
              There are currently no resources in this category.
            </div>
          )}
          {resources.map((resource) => (
            <ResourceSummary
              name={resource.name["en"]}
              description={resource.description["en"]}
              href={`/resource/${resource.id}`}
              img={{ src: "/static/images/category-keyboard-layouts.png", alt: "test" }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
