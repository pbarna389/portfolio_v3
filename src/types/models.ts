type AboutMeModelType = {
	heading: string
	text: string
}

type HeroModelType = {
	header1: string
	header2: string
	header3: string
}

export type FiresbaseDataType = {
	aboutMe: AboutMeModelType
	hero: HeroModelType
	navLinks: string[]
	[key: string]: string[] | AboutMeModelType | undefined | HeroModelType
}
