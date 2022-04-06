import Item from './components/Item'
import NavBar from './components/NavBar'
import './styles/App.css'
import data from './data.json'
import { useMemo } from 'react'
import Footer from './components/Footer'

function App() {
	const items = useMemo(() => data, [])
	return (
		<div className='app'>
			{/* Header */}
			<NavBar />

			{/* Items */}
			<div className='container'>
				{items.models.map((item, index) => {
					if (item.title !== 'Accessories') {
						return <Item key={index} {...item} />
					} else {
						return <Item key={index} {...item} Footer={<Footer />} />
					}
				})}
			</div>
		</div>
	)
}

export default App
