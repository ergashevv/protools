import React from 'react'

import './product.scss'
import ProductHero from './productHero'
import Products from '../home/products'

function Product() {
	return (
		<div className='product'>
			<ProductHero />
			<Products title='Tavsiya etilganlar' key={1} />
		</div>
	)
}

export default Product
