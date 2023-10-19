import React from 'react'
import '../global.scss'

function Oval({ bgcolor, text, color }) {
	return (
		<div>
			<span
				className='oval'
				style={{ background: `${bgcolor}`, color: `${color}` }}
			>
				{text}
			</span>
		</div>
	)
}

export default Oval
