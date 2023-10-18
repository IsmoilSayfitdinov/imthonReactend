import './App.css'
import {Routes , Route} from "react-router-dom"
import Liked from './routes/liked/Liked'
import Home from './page/home/Home'
import { useEffect } from 'react'
import ProductsVies from './routes/product/ProductsVies'
import Trackmusic from './routes/tarckMusic/Trackmusic'


function App() {

           const CLIENT_ID = '3d2faef413894e58a5045974a17dd2fa'
			const SECRET_ID = 'a26b590135b144ef84a173cbf10822c4'

			useEffect(() => {
				const fetchData = async () => {
					const response = await fetch(
						'https://accounts.spotify.com/api/token',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + SECRET_ID),
							},
							body: `grant_type=client_credentials`,
						}
					)
					const auth = await response.json()
					localStorage.setItem(
						'token',
						`${auth.token_type} ${auth.access_token}`
					)
				}
				fetchData()
			}, [])

  return (
		<>
			<div className='conatiner'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/liked' element={<Liked />} />
					<Route path='/products' element={<ProductsVies />} />
				</Routes>
				<Trackmusic/>
			</div>
		</>
	)
}

export default App
