import React from 'react'
import '../global.scss'

function CategoryCards({ image, text, width }) {
	return (
		<div className='categoryCard' style={{ maxWidth: `${width}` }}>
			<img src={image} alt='tool img' />
			<button className='categoryCard_btn'>
				{text}{' '}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M7 17L17 7M17 7H7M17 7V17'
						stroke='white'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
		</div>
	)
}

export default CategoryCards
