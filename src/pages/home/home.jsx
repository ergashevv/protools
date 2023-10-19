import React from 'react'
import Carousel from './carousel'
import Intro from './intro'
import News from './news'
import Categories from './categories'
import Products from './products'

function Home() {
	return (
		<div className='home'>
			<Carousel />
			<Intro />
			<Categories />
			<Products title='Mashhur mahsulotlar' key={1} />
			<News />
		</div>
	)
}

export default Home
