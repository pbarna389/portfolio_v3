import { useMemo } from 'react'

import { IconContext } from 'react-icons'

import type { SkillsProps } from 'sections/Skills/Skill'

import { Link } from '@components'
import { textConverter } from '@utils'
import type { HrefTypes, IconKeys } from '@types'

import { HIGHLIGHT_CLASSES, HOVER_HIGHLIGHT } from './constants'

import { Icon } from './Icon'

type IconCollectionProps = {
	arrayToCreateFrom: {
		link: Exclude<HrefTypes, `#${string}`>
		name: IconKeys
		highlightColor?: string
		progress?: number
	}[]
	className: string
	size: number
	component?: React.ComponentType<SkillsProps>
	inView?: boolean
}

export const IconCollection = ({
	size,
	arrayToCreateFrom,
	component,
	inView = false,
	className
}: IconCollectionProps) => {
	const value = useMemo(() => {
		return { size: size.toString() }
	}, [size])

	const Wrapper = component

	if (Wrapper) {
		return (
			<div className={className}>
				<IconContext value={value}>
					{arrayToCreateFrom.map((el) => {
						return (
							<Wrapper
								key={`icon-${el.name}`}
								name={textConverter(el.name)}
								inViewDesktop={inView}
								progress={el.progress ? el.progress : 0}
								highlightColor={el.highlightColor}
							>
								<Link
									href={el.link}
									className={`flex items-center justify-center transition transform hover:scale-125 sm:text-[#959595] ${HIGHLIGHT_CLASSES[el.name]} ${HOVER_HIGHLIGHT[el.name]} hover:brightness-125`}
								>
									<Icon name={el.name} className={`fill-current transition`} />
								</Link>
							</Wrapper>
						)
					})}
				</IconContext>
			</div>
		)
	}

	return (
		<div className={className}>
			<IconContext value={value}>
				{arrayToCreateFrom.map((el) => {
					return (
						<Link
							key={`icon-${el.name}`}
							href={el.link}
							className={`flex items-center justify-center p-2 border-1 border-darker-700 bg-white/4 rounded-full h-8 w-8 hover:border-darker-400 hover:bg-white/12 hover:scale-125 transition ${HIGHLIGHT_CLASSES[el.name]} sm:text-[#959595] ${HOVER_HIGHLIGHT[el.name]} hover:brightness-125 `}
						>
							<Icon name={el.name} className={`fill-current transition`} />
						</Link>
					)
				})}
			</IconContext>
		</div>
	)
}
