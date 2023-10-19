import React from 'react'

import './newsPage.scss'

import LinearCard from '../../components/linearCard'
import image from '../../public/images/news2.png'
import image2 from '../../public/images/news3.png'

const data = [
	{
		image: image,
		author: 'Phoenix Baker • 19 Jan 2022',
		title: 'Migrating to Linear 101',
		description:
			'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#F0F9FF',
		bgcolor2: '#FDF2FA',
		color: '#026AA2',
		color2: '#C11574',
	},
	{
		image: image,
		author: 'Phoenix Baker • 19 Jan 2022',
		title: 'Migrating to Linear 101',
		description:
			'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#F0F9FF',
		bgcolor2: '#FDF2FA',
		color: '#026AA2',
		color2: '#C11574',
	},
	{
		image: image2,
		author: 'Lana Steiner • 18 Jan 2022',
		title: 'Building your API Stack',
		description:
			'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#ECFDF3',
		bgcolor2: '#FDF2FA',
		color: '#027A48',
		color2: '#C11574',
	},
	{
		image: image2,
		author: 'Lana Steiner • 18 Jan 2022',
		title: 'Building your API Stack',
		description:
			'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#ECFDF3',
		bgcolor2: '#FDF2FA',
		color: '#027A48',
		color2: '#C11574',
	},
	{
		image: image,
		author: 'Phoenix Baker • 19 Jan 2022',
		title: 'Migrating to Linear 101',
		description:
			'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#F0F9FF',
		bgcolor2: '#FDF2FA',
		color: '#026AA2',
		color2: '#C11574',
	},
	{
		image: image,
		author: 'Phoenix Baker • 19 Jan 2022',
		title: 'Migrating to Linear 101',
		description:
			'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#F0F9FF',
		bgcolor2: '#FDF2FA',
		color: '#026AA2',
		color2: '#C11574',
	},
	{
		image: image2,
		author: 'Lana Steiner • 18 Jan 2022',
		title: 'Building your API Stack',
		description:
			'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#ECFDF3',
		bgcolor2: '#FDF2FA',
		color: '#027A48',
		color2: '#C11574',
	},
	{
		image: image2,
		author: 'Lana Steiner • 18 Jan 2022',
		title: 'Building your API Stack',
		description:
			'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
		categories: ['Design', 'Research'],
		text: 'Design',
		text2: 'Research',
		bgcolor: '#ECFDF3',
		bgcolor2: '#FDF2FA',
		color: '#027A48',
		color2: '#C11574',
	},
]

function News() {
	return (
		<div className='newsPage'>
			<div className='container'>
				<h2 className='title'>Yangiliklar</h2>
				<div className='newsPage_wrap'>
					{data.map((item, index) => (
						<LinearCard
							key={index}
							image={item.image}
							headline={item.author}
							title={item.title}
							description={item.description}
							text={item.text}
							text2={item.text2}
							bgcolor={item.bgcolor}
							bgcolor2={item.bgcolor2}
							color={item.color}
							color2={item.color2}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default News
