import { Icon } from '@components'
import type { IconKeys } from '@types'

type IconProps = {
	name: IconKeys
	text: string
} & React.SVGProps<SVGSVGElement>

export const IconWithText = ({ name, text, ...props }: IconProps) => {
	return (
		<div className="text-center flex gap-1 items-center justify-center">
			<Icon name={name} {...props} />
			<span className="text-[darker-500] text-[16px] sm:text-md font-bold">{text}</span>
		</div>
	)
}
