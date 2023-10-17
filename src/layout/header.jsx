import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../public/images/logo.png'
import search from '../public/svg/search.svg'
import '../global.scss'

function Header() {
	return (
		<header className='header'>
			<div className='container header_wrap'>
				<Link to='/' className='header_left'>
					<img src={logo} alt='logo' />
				</Link>
				<div className='header_center_wrap'>
					<button className='header_btn'>
						<div className='burger_wrap'>
							<span className='burger1'></span>
							<span className='burger2'></span>
							<span className='burger3'></span>
						</div>
						Categories
					</button>
					<div className='header_center'>
						<NavLink to={'/'}>Zapchastlar</NavLink>
						<NavLink to={'/'}>Kompaniya</NavLink>
						<NavLink to={'/'}>Do’konlar</NavLink>
						<NavLink to={'/'}>Yangiliklar</NavLink>
						<NavLink to={'/'}>Kontaktlar</NavLink>
					</div>
				</div>
				<label className='header_label'>
                    <img src={search} alt='search icon' width={20} height={20}/>
					<input placeholder='search' className='header_search' />
				</label>
			</div>
		</header>
	)
}

export default Header
