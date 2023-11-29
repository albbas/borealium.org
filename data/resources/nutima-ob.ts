import { LinkType, Resource, ResourceType } from "~types/resource.ts"

const resource: Resource = {
  id: "nutima_ob",
  type: ResourceType.External,
  languages: ["is"],
  category: "dictionaries",
  name: {
    en: "Icelandic modern dictionary",
    is: "Íslensk nútímamálsorðabók",
  },
  description: {
    en: "Online dictionary for Icelandic",
    is: "Íslensk nútímamálsorðabók",
  },
  links: [
    {
      text: {
        en: "Nútímamálsorðabók",
      },
      url: new URL("https://islenskordabok.arnastofnun.is"),
    },
  ],
}

export default resource
