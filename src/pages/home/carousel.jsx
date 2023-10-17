import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  Pagination, EffectFade, Autoplay } from 'swiper/modules'

import banner1 from '../../public/images/banner.png'
import banner2 from '../../public/images/banner2.jpg'
import banner3 from '../../public/images/banner3.jpg'

import 'swiper/css'
import './home.scss'

const Carousel = () => {
	return (
		<div className='slider'>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				speed={6000}
				effect={'fade'}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[ Pagination, EffectFade, Autoplay]}
				className='mySwiper container'
			>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner3})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner1})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner2})`,
					}}
				></SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Carousel
