import React from 'react'
import CategoryCards from '../../components/categoryCards'
import tool from '../../public/images/blueTool.png'
import tool2 from '../../public/images/blueTool2.png'
import tool3 from '../../public/images/blueTool3.png'
import tool4 from '../../public/images/grayTool.png'
import tool5 from '../../public/images/redTool.png'
import tool6 from '../../public/images/blackTool.png'

import './home.scss'

const data = [
	{ image: tool, text: 'Elektr asboblar', width: 600 },
	{ image: tool2, text: 'Qo’l asboblar', width: 290 },
	{ image: tool3, text: 'Uskunalar', width: 290 },
	{ image: tool4, text: 'Qo’l asboblar', width: 290 },
	{ image: tool5, text: 'Uskunalar', width: 290 },
	{ image: tool6, text: 'Elektr asboblar', width: 600 },
]

function Categories() {
	return (
		<div className='categories'>
			<div className='container'>
				<h2 className='home_headline'>Mashhur kategoriyalar</h2>
				<div className='categories_cards'>
					{data.map((item, index) => (
						<CategoryCards
							image={item.image}
							key={index}
							text={item.text}
							width={item.width}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories
