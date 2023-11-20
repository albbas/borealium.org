import { TranslateFn } from "~plugins/fluent.ts"
import { CategoryLabel, TagLabel } from "./label.tsx"

export type SimplePost = {
  date: string
  tag: string
  title: string
  url: string
  id: string
}

export default function Aside(props: {
  category: string
  posts: SimplePost[]
  t: TranslateFn
}) {
  return (
    <div className="aside">
      <CategoryLabel category={props.category} />
      {props.posts.map((post) => <AsideBlock post={post} t={props.t} />)}
    </div>
  )
}

function AsideBlock(props: { post: SimplePost; t: TranslateFn }) {
  return (
    <div className="aside-block">
      <div className="aside-block-text">
        <h3>
          {props.post.title}
        </h3>
        <p data-excerpt-id={props.post.id}>
          {/* This is filled by a plugin, so leave it empty. */}
        </p>
      </div>
      <a href={props.post.url}>{props.t("read-more")}</a>
    </div>
  )
}
