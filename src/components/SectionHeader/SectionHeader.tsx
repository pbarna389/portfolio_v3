type SectionHeaderProps = {
	subText: Capitalize<string>
	title: Capitalize<string>
}

export const SectionHeader = ({ title, subText }: SectionHeaderProps) => {
	return (
		<div className="flex flex-col gap-[calc(1rem-2px)] justify-center items-center">
			<h2 className="text-lg font-bold text-white lg:text-5xl">{title}</h2>
			<h3 className="text-center text-sm text-darker-600">{subText}</h3>
		</div>
	)
}
