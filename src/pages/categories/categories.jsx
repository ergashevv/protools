import React from 'react'
import Pagination from './pagination'

import CategoryCards from '../../components/categoryCards'
import tool2 from '../../public/images/blueTool2.png'
import tool3 from '../../public/images/blueTool3.png'
import tool4 from '../../public/images/grayTool.png'
import tool5 from '../../public/images/redTool.png'
import { Link } from 'react-router-dom'

const data = [
	{ image: tool4, text: 'Qo’l asboblar', width: 290 },
	{ image: tool5, text: 'Uskunalar', width: 290 },
	{ image: tool2, text: 'Qo’l asboblar', width: 290 },
	{ image: tool3, text: 'Uskunalar', width: 290 },
]

function Categories() {
	return (
		<div className='categoriesPage container'>
			<Pagination />
			<div className='categoriesPage'>
				<h2 className='title'>Mashhur kategoriyalar</h2>
				<div className='categoriesPage_wrap'>
					{data.map((item, index) => (
						<Link key={index} to={"/"}>
							<CategoryCards
								image={item.image}
								text={item.text}
								width={item.width}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories
