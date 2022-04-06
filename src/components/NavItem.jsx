const NavItem = ({ htmlRef, description }) => {
	return (
		<a className='navItem' href={htmlRef}>
			{description}
		</a>
	)
}

export default NavItem
