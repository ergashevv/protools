import React from 'react'
import tool from '../../public/images/tool.png'
import './home.scss'

function Intro() {
	return (
		<div className='intro'>
			<div className='container'>
				<div className='intro_wrapper'>
					<img src={tool} alt='tool img' className='intro_left' />
					<div className='intro_right'>
						<div>
							<h4>We’ve helped hundreds of companies</h4>
							<h2>Biz shunchaki barcha buyuk ishlarning boshidamiz!</h2>
						</div>
						<div className='intro_left_wrap'>
							<span>
								<h3>16+</h3>
								<p>Do’konlar soni</p>
							</span>
							<span>
								<h3>60+</h3>
								<p>Hamkorlarimiz</p>
							</span>
							<span>
								<h3>6k+</h3>
								<p>Mahsulotlar</p>
							</span>
							<span>
								<h3>200+</h3>
								<p>Tajribali xodimlar</p>
							</span>
						</div>
					</div>
				</div>

				<div className='intro_wrap'>
					<div className='intro_wrap_card'>
						<div className='intro_wrap_card_bubble'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M12 4C10.6193 4 9.5 5.11929 9.5 6.5C9.5 7.88071 10.6193 9 12 9C13.3807 9 14.5 7.88071 14.5 6.5C14.5 5.11929 13.3807 4 12 4ZM12 4V2M21 14.9375C18.8012 17.4287 15.5841 19 12 19C8.41592 19 5.19883 17.4287 3 14.9375M10.7448 8.66169L3 22M13.2552 8.66169L21 22'
										stroke='#011E34'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</span>
						</div>
						<h3>Dealer network</h3>
						<p>Wide network of Dealers</p>
					</div>
					<div className='intro_wrap_card'>
						<div className='intro_wrap_card_bubble'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M9 11.5L11 13.5L15.5 8.99999M20 12C20 16.9084 14.646 20.4784 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V7.21759C4 6.41808 4 6.01833 4.13076 5.6747C4.24627 5.37113 4.43398 5.10027 4.67766 4.88552C4.9535 4.64243 5.3278 4.50207 6.0764 4.22134L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07827C11.9518 2.06457 12.0482 2.06457 12.143 2.07827C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22134C18.6722 4.50207 19.0465 4.64243 19.3223 4.88552C19.566 5.10027 19.7537 5.37113 19.8692 5.6747C20 6.01833 20 6.41808 20 7.21759V12Z'
										stroke='#011E34'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</span>
						</div>
						<h3>Dealer network</h3>
						<p>Wide network of Dealers</p>
					</div>
					<div className='intro_wrap_card'>
						<div className='intro_wrap_card_bubble'>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
										stroke='#011E34'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</span>
						</div>
						<h3>Dealer network</h3>
						<p>Wide network of Dealers</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
