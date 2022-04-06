const NavSolarItem = ({ htmlRef, type }) => {
	return (
		<a className='navItem' href={htmlRef}>
			Solar {type}
		</a>
	)
}

export default NavSolarItem
