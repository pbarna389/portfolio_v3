type AboutMeModelType = {
	heading: string
	text: string
}

export type FiresbaseDataType = {
	aboutMe: AboutMeModelType
	navLinks: string[]
	[key: string]: string[] | AboutMeModelType | undefined
}
