import NavItem from './NavItem'
import NavModelItem from './NavModelItem'
import NavSolarItem from './NavSolarItem'
import '../styles/NavBar.css'

const NavBar = () => {
	return (
		<nav className='nav'>
			<svg
				class='header__icon'
				viewBox='0 0 342 35'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z'
					fill='currentColor'></path>
			</svg>
			<div className='navItemDistance'>
				<NavModelItem htmlRef='#' modelCode='S' />
				<NavModelItem htmlRef='#' modelCode='3' />
				<NavModelItem htmlRef='#' modelCode='X' />
				<NavModelItem htmlRef='#' modelCode='Y' />
				<NavSolarItem htmlRef='#' type='Roof' />
				<NavSolarItem htmlRef='#' type='Panels' />
			</div>
			<div className='navItemDistance'>
				<NavItem htmlRef='#' description='Shop' />
				<NavItem htmlRef='#' description='Account' />
				<NavItem htmlRef='#' description='Menu' />
			</div>
		</nav>
	)
}

export default NavBar
