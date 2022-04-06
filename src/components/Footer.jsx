import { useMemo } from 'react'
import footerLinks from '../footerLinks.json'
import '../styles/Footer.css'

const Footer = () => {
	const links = useMemo(() => footerLinks, [])

	return (
		<div className='footer'>
			{links.map((link, index) => (
				<a className='footerLink' href={`#${index}`}>
					{link.text}
				</a>
			))}
		</div>
	)
}

export default Footer
