import { Link } from '@components'
import type { HrefTypes } from '@types'

type NavigationLinkProps = {
	text: string
	setState?: () => void
}

const NavigationLink = ({ setState, text }: NavigationLinkProps) => {
	const refLink: HrefTypes = `#${text.split(' ')[0]}`

	return (
		<li className="w-fit" onClick={setState}>
			<Link
				href={refLink}
				target=""
				className="cursor-pointer hover:text-darker-200 transition duration-300 capitalize"
				onClick={setState}
			>
				{text}
			</Link>
		</li>
	)
}

export default NavigationLink
