import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa'
import { FaExclamation } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { FaDownload } from 'react-icons/fa6'
import { RiNextjsFill } from 'react-icons/ri'
import { SiGraphql } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiStrapi } from 'react-icons/si'
import { SiReactquery } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiReactrouter } from 'react-icons/si'

import type { IconKeys, IconsType } from '@types'

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
	strapi: SiStrapi,
	tanstackQuery: SiReactquery,
	reduxToolkit: SiRedux,
	graphql: SiGraphql,
	reactRouter: SiReactrouter,
	nextjs: RiNextjsFill,
	mail: CiMail,
	telephone: BsTelephone,
	arrowUp: FaArrowUp,
	error: FaExclamation,
	default: FaQuestionCircle
}

type IconProps = {
	name: IconKeys
} & React.SVGProps<SVGSVGElement>

export const Icon = ({ name, ...props }: IconProps) => {
	const Component = Icons[name] ? Icons[name] : Icons.default

	return <Component {...props} fill="currentColor" />
}
