import type { ConstantWithLinks, IconKeys } from '@types'

type AboutMeModelType = {
	heading: string
	text: string
}

type HeroModelType = {
	header1: string
	header2: string
	header3: string
}

type SkillsModelType = (ConstantWithLinks & {
	progress: number
})[]

type ContactsType = {
	hrefPrefix: 'tel:' | 'mailto:'
	name: IconKeys
	text: string
}

export type FiresbaseDataType = {
	aboutMe: AboutMeModelType
	contacts: ContactsType[]
	hero: HeroModelType
	navLinks: string[]
	profileLinks: ConstantWithLinks[]
	skills: SkillsModelType
	[key: string]:
		| string[]
		| AboutMeModelType
		| undefined
		| HeroModelType
		| SkillsModelType
		| ConstantWithLinks[]
		| ContactsType[]
}
