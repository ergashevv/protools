import React from 'react'
import '../global.scss'

function ProductCard({ image, info }) {
	return (
		<div className='ProductCard'>
			<span className='ProductCard_top productCard'>
				<img src={image} alt='tool img' />
			</span>
			<p>{info}</p>
		</div>
	)
}

export default ProductCard
