import './product.scss'
import {
	FreeMode,
	Navigation,
	Thumbs,
	Autoplay,
	Mousewheel,
	EffectCoverflow,
} from 'swiper/modules'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import tool from '../../public/images/blackTool.png'
import tool2 from '../../public/images/blueTool.png'
import tool3 from '../../public/images/grayTool.png'
import tool4 from '../../public/images/blueTool2.png'
import tool5 from '../../public/images/redTool.png'

const dataImage = [
	{ img: tool },
	{ img: tool2 },
	{ img: tool3 },
	{ img: tool4 },
	{ img: tool5 },
]

function ProductHero() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<div className='productHero'>
			<div className='container'>
				<div className='productHero_main'>
					<div className='productHero_left'>
						<Swiper
							onSwiper={setThumbsSwiper}
							loop={true}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							direction='vertical'
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
							className='mySwiper'
						>
							{dataImage &&
								dataImage.length > 0 &&
								dataImage.map((img, index) => {
									return (
										<SwiperSlide key={index} className='swiper_card'>
											<img src={img.img} alt='' key={index} />
										</SwiperSlide>
									)
								})}
						</Swiper>
						<Swiper
							loop={true}
							slidesPerView={1}
							spaceBetween={10}
							mousewheel={true}
							navigation={true}
							thumbs={{
								swiper:
									thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
							}}
							modules={[Autoplay, FreeMode, Navigation, Thumbs, Mousewheel]}
							className='mySwiper2'
						>
							{dataImage &&
								dataImage.length > 0 &&
								dataImage.map((img, index) => {
									return (
										<SwiperSlide key={index} className='swiper2_card'>
											<img src={img.img} alt='tool img' key={index} />
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='27'
												height='27'
												viewBox='0 0 27 27'
												fill='none'
											>
												<path
													d='M23.6197 7.72914C23.2842 6.95238 22.8005 6.24849 22.1956 5.65687C21.5903 5.06348 20.8766 4.59192 20.0933 4.26784C19.2811 3.93045 18.41 3.75776 17.5305 3.75978C16.2966 3.75978 15.0928 4.09765 14.0466 4.73586C13.7964 4.88852 13.5586 5.05621 13.3334 5.23891C13.1081 5.05621 12.8704 4.88852 12.6201 4.73586C11.5739 4.09765 10.3701 3.75978 9.13625 3.75978C8.24777 3.75978 7.38683 3.92997 6.57343 4.26784C5.78757 4.5932 5.07929 5.06121 4.47113 5.65687C3.86545 6.24782 3.38162 6.95188 3.04706 7.72914C2.69918 8.53753 2.52148 9.39597 2.52148 10.2794C2.52148 11.1129 2.69167 11.9813 3.02954 12.8648C3.31235 13.6031 3.7178 14.3689 4.23587 15.1423C5.05677 16.3661 6.18551 17.6425 7.58705 18.9365C9.9096 21.0813 12.2096 22.5629 12.3072 22.623L12.9004 23.0034C13.1632 23.1711 13.501 23.1711 13.7638 23.0034L14.357 22.623C14.4546 22.5604 16.7521 21.0813 19.0772 18.9365C20.4787 17.6425 21.6074 16.3661 22.4283 15.1423C22.9464 14.3689 23.3544 13.6031 23.6347 12.8648C23.9725 11.9813 24.1427 11.1129 24.1427 10.2794C24.1452 9.39597 23.9675 8.53753 23.6197 7.72914ZM13.3334 21.0237C13.3334 21.0237 4.42357 15.315 4.42357 10.2794C4.42357 7.72914 6.53339 5.66187 9.13625 5.66187C10.9658 5.66187 12.5525 6.68299 13.3334 8.17463C14.1142 6.68299 15.701 5.66187 17.5305 5.66187C20.1333 5.66187 22.2431 7.72914 22.2431 10.2794C22.2431 15.315 13.3334 21.0237 13.3334 21.0237Z'
													fill='#BD0000'
												/>
												<path
													d='M17.5307 5.66183C15.7012 5.66183 14.1145 6.68296 13.3336 8.17459C12.5528 6.68296 10.966 5.66183 9.1365 5.66183C6.53365 5.66183 4.42383 7.72911 4.42383 10.2794C4.42383 15.3149 13.3336 21.0237 13.3336 21.0237C13.3336 21.0237 22.2434 15.3149 22.2434 10.2794C22.2434 7.72911 20.1336 5.66183 17.5307 5.66183Z'
													fill='#FFDCDC'
												/>
											</svg>
										</SwiperSlide>
									)
								})}
						</Swiper>
					</div>
					<div className='productHero_right'>
						<h2>Perfodrel (850 vt)</h2>
						<div className='productHero_text_wrap'>
							<div>
								<span className='productHero_name'>Kuchlanish (V):</span>{' '}
								<span className='productHero_value'>220 Chastota</span>
							</div>
							<div>
								<span className='productHero_name'>
									Gs50 Aylanish tezligi:{' '}
								</span>{' '}
								<span className='productHero_value'>0-1300 ayl/daq</span>
							</div>
							<div>
								<span className='productHero_name'>Quvvat sarfi:</span>{' '}
								<span className='productHero_value'>850 Vt</span>
							</div>
							<div>
								<span className='productHero_name'>Patron hajmi:</span>{' '}
								<span className='productHero_value'>28 mm</span>
							</div>
							<div>
								<span className='productHero_name'>Patron:</span>{' '}
								<span className='productHero_value'>turisds-plus</span>
							</div>
							<div>
								<span className='productHero_name'>Kafolat (oy):</span>{' '}
								<span className='productHero_value'>6</span>
							</div>
							<div>
								<span className='productHero_name'>Og‘irligi (netto):</span>{' '}
								<span className='productHero_value'>5,3 kg</span>
							</div>
						</div>
					</div>
				</div>
				<h2 className='productHero_title'>Tavsifi</h2>
				<p className='productHero_description'>
					Drel - qurilish, pardozlash, duradgorlik, sanitariya-tesisat va boshqa
					ishlarni bajarishda turli materiallarda teshiklarni burg'ulash uchun
					burg'ulash yoki boshqa kesish asbobiga aylanish harakati berish uchun
					mo'ljallangan qo'lda, pnevmatik yoki elektr asbob. Ko'pincha drel
					ikkita ish rejimiga ega: normal va zarba bilan. Oddiy rejim
					duradgorlik va sanitariya-tesisat ishlari uchun mo'ljallangan. Bolg'a
					burg'ulash rejimi tosh, tosh yoki betonda teshiklarni burg'ulash uchun
					mo'ljallangan. Bolg'a rejimida drel nafaqat aylanmaydi, balki o'zaro
					harakat qiladi, bu esa qisqa vaqt ichida qattiq devorlarni burg'ulash
					imkonini beradi. Drelning uzunlamasına harakatlari drelning zarba
					mexanizmi bilan ta'minlanadi. Toshni (g'isht, beton) burg'ulash uchun
					sizga drel kerak bo'ladi. Darbeli drel o'zining samaradorligi bo'yicha
					bolg'acha dreldan sezilarli darajada farq qiladi va uni ikkinchisining
					to'liq o'rnini bosuvchi deb hisoblamaslik kerak. Materialni yorilish
					xavfi mavjud bo'lgan hollarda zarba burg'ulash qabul qilinishi mumkin
					emas - masalan, keramik plitkalar va plitkalarni burg'ulashda yoki
					devorlarning chetlariga yaqin joyda. Burg'ulashdan tashqari, drel
					vintlardek va vintlarni mahkamlash / olib tashlash uchun ishlatilishi
					mumkin. Bundan tashqari, silliqlash va kesish uchun nozullar keng
					tarqalgan bo'lib, ular burg'ulash chuckiga o'rnatilishi uchun
					mo'ljallangan. Asbobga ehtiyotkorlik bilan munosabatda bo'lish kerak.
					Drel bilan har qanday ishni bajarayotganda, qayta ishlangan
					materialning kichik zarralari ko'zlarga tushmasligi uchun xavfsizlik
					ko'zoynaklarini taqish kerak.
				</p>
			</div>
		</div>
	)
}

export default ProductHero
