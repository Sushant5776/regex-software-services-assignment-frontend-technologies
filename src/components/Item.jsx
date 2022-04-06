import '../styles/Item.css'

const Item = ({
	src,
	buttons,
	title,
	description,
	descriptionLink,
	Footer,
}) => {
	return (
		<div className='item'>
			<img className='item__image' src={src} alt={src} />
			<div className='item__content'>
				<div className='item__headerSection'>
					<h1 className='item__header'>{title}</h1>
					<p>
						{description}
						{descriptionLink ? (
							<a className='underline' href='/'>
								{descriptionLink}
							</a>
						) : (
							''
						)}
					</p>
				</div>
				<div className='item__footerSection'>
					{buttons.map((button) => (
						<button className={button.classes} key={button.text}>
							{button.text}
						</button>
					))}
				</div>

				{/* Footer --> Accessories */}
				{Footer ?? ''}
			</div>
		</div>
	)
}

export default Item
