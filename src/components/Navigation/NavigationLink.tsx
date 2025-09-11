import { Link } from '@components'
import type { HrefTypes } from '@types'

type NavigationLinkProps = {
	text: string
	setState?: (() => void) | undefined
}

const NavigationLink = ({ setState, text }: NavigationLinkProps) => {
	const refLink: HrefTypes = `#${text.split(' ')[0]}`

	return (
		<li onClick={setState}>
			<Link
				href={refLink}
				target=""
				className="cursor-pointer hover:text-darker-300 transition duration-300 capitalize"
			>
				{text}
			</Link>
		</li>
	)
}

export default NavigationLink
