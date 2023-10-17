import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/header'
import Footer from './layout/footer'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					{/* <Route path='/' element={<Home />} />
					<Route path='/company' element={<Company />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/news' element={<NewsPage />} />
					<Route path='/news' element={<NewsPage />} /> */}
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	)
}

export default App
