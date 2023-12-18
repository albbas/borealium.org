export type LanguageId = string
export type RegionId = string
export type LangTag = string

export type LanguagesData = {
  languages: Record<LanguageId, LanguageData>
  fallbacks: Record<LangTag, LangTag[]>
  uiOnly: LangTag[]
  excludeFromUi: LangTag[]
}

export type LanguageData = {
  name: Record<LangTag, string>
  autonym: string
  regions?: Record<RegionId, string>
}
