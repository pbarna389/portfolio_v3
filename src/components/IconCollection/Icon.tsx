import { FaLinkedinIn } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { FaDownload } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiStrapi } from 'react-icons/si'

type IconKeys =
	| 'github'
	| 'linkedin'
	| 'download'
	| 'react'
	| 'javascript'
	| 'typescript'
	| 'html'
	| 'css'
	| 'tailwind'
	| 'strapi'

type IconsType<Key extends string> = {
	[Property in Key]: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Icons: IconsType<IconKeys> = {
	github: FaGithub,
	linkedin: FaLinkedinIn,
	download: FaDownload,
	react: FaReact,
	javascript: SiJavascript,
	typescript: SiTypescript,
	html: FaHtml5,
	css: FaCss3Alt,
	tailwind: SiTailwindcss,
	strapi: SiStrapi
}

type IconProps = {
	name: IconKeys
} & React.SVGProps<SVGSVGElement>

export const Icon = ({ name, ...props }: IconProps) => {
	const Component = Icons[name]

	return <Component {...props} />
}
