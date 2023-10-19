import React from 'react'
import '../global.scss'
import Oval from './oval'

function LinearCard({
	image,
	headline,
	title,
	description,
	text,
	bgcolor,
	color,
	text2,
	bgcolor2,
	color2,
}) {
	return (
		<div className='linearCard'>
			<img src={image} alt='img' />
			<div>
				<h3>{headline}</h3>
				<h2>{title}</h2>
				<p>{description}</p>
				<div className='linerCard_box'>
					<Oval text={text} key={1} bgcolor={bgcolor} color={color} />
					<Oval text={text2} bgcolor={bgcolor2} color={color2} />
				</div>
			</div>
		</div>
	)
}

export default LinearCard
