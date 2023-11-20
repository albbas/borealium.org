import { getLanguageData } from "~plugins/language-data.ts"
import { FluentPage } from "~plugins/fluent.ts"
import { Page } from "lume/core.ts"
import { CategoryLabel } from "~/_components/label.tsx"
import { DownloadButton } from "~/_components/download-button.tsx"

export default function LandingMainBlock(
  page: Page & FluentPage,
) {
  const t = page.fluentBundle(page.lang, "_components/landing/MainBlock")
  // console.log(page.lang, t("welcome"), page.t("welcome"))
  const { languages, uiOnly } = getLanguageData()

  return (
    <>
      <div className="first-cell">
        <div className="text-group">
          <CategoryLabel category={t("welcome")} />
          <h2>{t("title")}</h2>
          <p>
            {t("description")}
          </p>
        </div>
      </div>
      <div className="second-cell">
        <h3>
          <img
            style={{ float: "left", marginTop: "-1px", marginRight: "8px" }}
            src={"/static/images/tag-language.svg"}
            alt=""
          />
          {t("subtitle")}
        </h3>
        <div className="language-group">
          {Object.entries(languages)
            .filter(([code]) => !uiOnly.includes(code))
            .map(([code, data]) => {
              return <DownloadButton title={data.autonym} href={`/language/${code}`} />
            })}
        </div>
      </div>
    </>
  )
}
