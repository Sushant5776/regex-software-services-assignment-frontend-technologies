const NavModelItem = ({ htmlRef, modelCode }) => {
	return (
		<a className='navItem' href={htmlRef}>
			Model {modelCode}
		</a>
	)
}

export default NavModelItem
