import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../public/images/logo.png'
import '../global.scss'

function Header() {
	const [active, setActive] = useState(false)

	useEffect(() => {
		const handleClickOutside = event => {
			if (active && !event.target.closest('.mobile_header')) {
				setActive()
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [active])

	return (
		<header className='header'>
			<div className='header_wrap container'>
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
						<NavLink to={'/contact'}>Do’konlar</NavLink>
						<NavLink to={'/news'}>Yangiliklar</NavLink>
						<NavLink to={'/contact'}>Kontaktlar</NavLink>
					</div>
				</div>
				<label className='header_label'>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
						>
							<path
								d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
								strokeWidth='1.66667'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<input placeholder='search' className='header_search' />
				</label>
				<div className='mobile_header'>
					<button className='mobile_header_search'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
						>
							<path
								d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
								stroke='#667085'
								strokeWidth='1.66667'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<div className='mobile_header_btn' onClick={() => setActive(!active)}>
						<div className={active ? ` activeHamburger` : `hamburger`} />
					</div>
					<div className={active ? `activeSideNav` : `sideNav`}>
						<ul className={'mobile_header_list'}>
							<li>
								<NavLink to={'/'}>Zapchastlar</NavLink>
							</li>
							<li>
								<NavLink to={'/'}>Kompaniya</NavLink>
							</li>
							<li>
								<NavLink to={'/contact'}>Do’konlar</NavLink>
							</li>
							<li>
								<NavLink to={'/news'}>Yangiliklar</NavLink>
							</li>
							<li>
								<NavLink to={'/contact'}>Kontaktlar</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
