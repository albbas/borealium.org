import { Page } from "lume/core.ts"
import { Resource } from "~types/resource.ts"
import { ResourceSummary } from "~/_templates/_components/resource-summary.tsx"

export const layout = "layouts/base.tsx"

type CategoryIndexProps = {
  resources: Resource[]
}

export default function CategoryIndexLayout(page: Page & CategoryIndexProps) {
  const { resources, category, categoryId } = page

  // console.log(category)
  // Deno.exit(1)

  return (
    <div
      data-category={categoryId}
      data-type="category-index"
      data-pagefind-filter="type[data-type], category[data-category]"
      className="category-index"
    >
      <div className="content">
        <div>
          <h1>{category["en"].name}</h1>
          <p>
            {category["en"].description}
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
