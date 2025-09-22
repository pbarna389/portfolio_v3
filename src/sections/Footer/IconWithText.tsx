import { Icon, Link } from '@components'
import type { HrefTypes, IconKeys } from '@types'

type IconProps = {
	href: HrefTypes
	name: IconKeys
	text: string
} & React.SVGProps<SVGSVGElement>

export const IconWithText = ({ name, text, href, ...props }: IconProps) => {
	return (
		<div className="text-center *:transition *:hover:brightness-120">
			<Link
				href={href}
				className="flex gap-1 items-center justify-center text-[darker-500] text-[17px] sm:text-md font-bold"
			>
				<Icon name={name} {...props} />
				{text}
			</Link>
		</div>
	)
}
