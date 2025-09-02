import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

type IconKeys = 'github' | 'linkedin'

type IconsType<Key extends string> = {
	[Property in Key]: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Icons: IconsType<IconKeys> = {
	github: FaGithub,
	linkedin: FaLinkedinIn
}

type IconProps = {
	name: IconKeys
} & React.SVGProps<SVGSVGElement>

export const Icon = ({ name, ...props }: IconProps) => {
	const Component = Icons[name]

	return <Component {...props} />
}
