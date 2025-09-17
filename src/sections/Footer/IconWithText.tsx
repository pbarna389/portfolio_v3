import { Icon, Link } from '@components'
import type { HrefTypes, IconKeys } from '@types'

type IconProps = {
	href: HrefTypes
	name: IconKeys
	text: string
} & React.SVGProps<SVGSVGElement>

export const IconWithText = ({ name, text, href, ...props }: IconProps) => {
	return (
		<div className="text-center flex gap-1 items-center justify-center *:transition *:hover:brightness-120">
			<Icon name={name} {...props} />
			<Link href={href} className="text-[darker-500] text-[16px] sm:text-md font-bold">
				{text}
			</Link>
		</div>
	)
}
