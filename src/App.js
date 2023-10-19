import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/header'
import Home from './pages/home/home'
import Product from './pages/product/product'
import Companies from './layout/companies'
import Footer from './layout/footer'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import Contact from './pages/contact/contact'
import Categories from './pages/categories/categories'
import News from './pages/news/news'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product' element={<Product />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/news' element={<News />} />
				</Routes>
			</main>
			<Companies />
			<Footer />
		</BrowserRouter>
	)
}

export default App
