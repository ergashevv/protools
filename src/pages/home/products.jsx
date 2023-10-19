import React from 'react'
import ProductCard from '../../components/productCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import tool from '../../public/images/blueTool.png'
import tool2 from '../../public/images/redTool.png'
import tool3 from '../../public/images/blueTool.png'
import tool4 from '../../public/images/redTool.png'

import './home.scss'

const data = [
	{
		image: tool,
		info: 'ABS Home Theater Systems Remote Control Replacing ',
	},
	{
		image: tool2,
		info: 'ABS Home Theater Systems Remote Control Replacing ',
	},
	{
		image: tool3,
		info: 'ABS Home Theater Systems Remote Control Replacing ',
	},
	{
		image: tool4,
		info: 'ABS Home Theater Systems Remote Control Replacing ',
	},
	{
		image: tool2,
		info: 'ABS Home Theater Systems Remote Control Replacing ',
	},
]

function Products({ title }) {
	return (
		<div className='products'>
			<div className='container'>
				<h2 className='home_headline'>{title}</h2>
				<Swiper
					spaceBetween={20}
					slidesPerView={4}
					navigation={true}
					breakpoints={{
						100: {
							slidesPerView: 1,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					modules={[Navigation]}
					className='mySwiper'
				>
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<ProductCard image={item.image} info={item.info} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Products
