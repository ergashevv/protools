import React from 'react'
import './home.scss'
import image from '../../public/images/news.png'
import image2 from '../../public/images/news2.png'
import image3 from '../../public/images/news3.png'
import LinearCard from '../../components/linearCard'
import Oval from '../../components/oval'

const ovalData = [
	{ bg: '#F9F5FF', color: `#6941C6`, text: 'Design' },
	{ bg: '#EEF4FF', color: `#3538CD`, text: 'Research' },
	{ bg: '#FDF2FA', color: `#C11574`, text: 'Presentation' },
]

const data = [
	{
		image: image2,
		headline: 'Phoenix Baker • 19 Jan 2022',
		title: 'Migrating to Linear 101',
		info: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
		text: 'Design',
		bg: '#F0F9FF',
		color: '#026AA2',
		text2: 'Research',
		bg2: '#FDF2FA',
		color2: '#C11574',
	},
	{
		image: image3,
		headline: 'Lana Steiner • 18 Jan 2022',
		title: 'align-self: stretch;',
		info: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
		text: 'Design',
		bg: '#ECFDF3',
		color: '#027A48',
		text2: 'Research',
		bg2: '#FDF2FA',
		color2: '#C11574',
	},
]

function News() {
	return (
		<div className='news'>
			<div className='container'>
				<h2 className='home_headline'>Yangiliklar</h2>
				<div className='news_main'>
					<div className='news_left'>
						<img src={image} alt='ux img' />
						<div>
							<h3>Olivia Rhye • 20 Jan 2022</h3>
							<span>
								<h2>UX review presentations</h2>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M7 17L17 7M17 7H7M17 7V17'
										stroke='#101828'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</span>
							<p>
								How do you create compelling presentations that wow your
								colleagues and impress your managers?
							</p>
							<div className='news_left_wrap'>
								{ovalData.map((item, index) => (
									<Oval
										bgcolor={item.bg}
										color={item.color}
										text={item.text}
										key={index}
									/>
								))}
							</div>
						</div>
					</div>
					<div className='news_right'>
						{data.map((item, index) => (
							<LinearCard
								image={item.image}
								headline={item.headline}
								title={item.title}
								description={item.info}
								text={item.text}
								bgcolor={item.bg}
								color={item.color}
								text2={item.text2}
								bgcolor2={item.bg2}
								color2={item.color2}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default News
