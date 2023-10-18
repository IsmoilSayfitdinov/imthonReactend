import { useEffect, useState } from 'react'
import Saidbar from '../../components/saidbar/Saidbar'
import Aside from '../../components/Aside/Aside'
import './Home.scss'
import  {Link} from 'react-router-dom'
import  {useDispatch} from 'react-redux'
import {AiOutlineLoading} from "react-icons/ai"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Home = () => {
	const [dataSpotidyf0 , Setdata0] = useState([])
	const [dataSpotify, SetData] = useState([])
	const [dataSpotify2, SetData2] = useState([])
	const [dataSpotify3, SetData3] = useState([])
	const [dataSpotify4, SetData4] = useState([])
	const [dataSpotify5, SetData5] = useState([])
	const dispatch = useDispatch()	
	const TOKEN = localStorage.getItem('token')
    const [logid , setLogid] = useState(false)


	useEffect(() => {
		const fetchData0 = async () => {
			const response = await fetch(
				'https://api.spotify.com/v1/browse/featured-playlists',
				{
					headers: {
						Authorization: TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			data.playlists.items.length = 6
			setLogid(true)
			Setdata0(data.playlists.items)
		}

		fetchData0()
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://api.spotify.com/v1/browse/categories/toplists/playlists',
				{
					headers: {
						Authorization: TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			data.playlists.items.length = 6
			setLogid(true)
			SetData(data.playlists.items)
		}

		fetchData()
	}, [])

	useEffect(() => {
		const fetchData2 = async () => {
			const response = await fetch(
				'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists',
				{
					headers: {
						Authorization: TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			data.playlists.items.length = 6
			setLogid(true)
			SetData2(data.playlists.items)
		}
		fetchData2()
	}, [])
	useEffect(() => {
		const fetchData3 = async () => {
			const response = await fetch(
				'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists',
				{
					headers: {
						Authorization: TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			data.playlists.items.length = 6
			setLogid(true)
			SetData3(data.playlists.items)
		}
		fetchData3()
	}, [])
	useEffect(() => {
		const fetchData4 = async () => {
			const response = await fetch(
				'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists',
				{
					headers: {
						Authorization: TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			data.playlists.items.length = 6
			setLogid(true)
			SetData4(data.playlists.items)
		}
		fetchData4()
	}, [])
	useEffect(() => {
		const fetchData5 = async () => {
			const response = await fetch(
				'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists',
				{
					headers: {
						Authorization: TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			data.playlists.items.length = 6
			setLogid(true)
			SetData5(data.playlists.items)
		}
		fetchData5()
	}, [])
	


     function setProducts(items){
		dispatch({ itemProduct: items  , type: '@PRODUCTS' })
	}


	return logid === true ? (
		<>
			<div className='mainDisplay'>
				<Saidbar />
				<div className='main_home'>
					<div className='Home'>
						<div className='Nexts'>
							<div className='divsNex'><FiChevronLeft/></div>
							<div className='divsNex'><FiChevronRight/></div>
						</div>
						<div className='textHome'>
							<h1>Good afternoon</h1>
						</div>
						<div className='HomeProducts'>
							{dataSpotidyf0?.map(item => (
								<Link
									to='/products'
									onClick={() => setProducts(item)}
									key={item.id}
								>
									<div className='HomeProduct' key={item.id}>
										<div className='imgText'>
											<img src={item.images[0].url} alt='' />
											<p>{item.name}</p>
										</div>
									</div>
								</Link>
							))}
						</div>
						<div className='cardProductsFetch'>
							<div className='text'>
								<h2>Your top mixes</h2>
							</div>
							<div className='CardItems'>
								{dataSpotify?.slice(2, 6).map(item => (
									<div className='CradProducts' key={item.id}>
										<div className='cardImg'>
											<Link to='/products' onClick={() => setProducts(item)}>
												<img src={item.images[0].url} alt='' />
											</Link>
										</div>
										<div className='cardTetx'>
											<p className='name'>{item?.name}</p>
											<p className='description'>
												{item?.description.slice(0, 40) + '...'}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='cardProductsFetch'>
							<div className='text'>
								<h2>Made for you</h2>
							</div>
							<div className='CardItems'>
								{dataSpotify2?.slice(2, 6).map(item => (
									<div className='CradProducts' key={item.id}>
										<div className='cardImg'>
											<Link to='/products' onClick={() => setProducts(item)}>
												<img
													src={item.images[0].url}
													alt=''
													onClick={() => setProducts(item)}
												/>
											</Link>
										</div>
										<div className='cardTetx'>
											<p className='name'>{item?.name}</p>
											<p className='description'>
												{item?.description.slice(0, 30) + '...'}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='cardProductsFetch'>
							<div className='text'>
								<h2>Recently played</h2>
							</div>
							<div className='CardItems'>
								{dataSpotify3?.slice(2, 6).map(item => (
									<div className='CradProducts' key={item.id}>
										<div className='cardImg'>
											<Link to='/products' onClick={() => setProducts(item)}>
												<img
													src={item.images[0].url}
													alt=''
													onClick={() => setProducts(item)}
												/>
											</Link>
										</div>
										<div className='cardTetx'>
											<p className='name'>{item?.name}</p>
											<p className='description'>
												{item?.description.slice(0, 40) + '...'}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='cardProductsFetch'>
							<div className='text'>
								<h2>Jump back in</h2>
							</div>
							<div className='CardItems'>
								{dataSpotify4?.slice(2, 6).map(item => (
									<div className='CradProducts' key={item.id}>
										<div className='cardImg'>
											<Link to='/products' onClick={() => setProducts(item)}>
												{' '}
												<img
													src={item.images[0].url}
													alt=''
													onClick={() => setProducts(item)}
												/>
											</Link>
										</div>
										<div className='cardTetx'>
											<p className='name'>{item?.name}</p>
											<p className='description'>
												{item?.description.slice(0, 40) + '...'}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='cardProductsFetch'>
							<div className='text'>
								<h2>Uniquely yours</h2>
							</div>
							<div className='CardItems'>
								{dataSpotify5?.slice(2, 6).map(item => (
									<div className='CradProducts' key={item.id}>
										<div className='cardImg'>
											<Link to='/products' onClick={() => setProducts(item)}>
												<img
													src={item.images[0].url}
													alt=''
													onClick={() => setProducts(item)}
												/>
											</Link>
										</div>
										<div className='cardTetx'>
											<p className='name'>{item?.name}</p>
											<p className='description'>
												{item?.description.slice(0, 40) + '...'}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<Aside />
			</div>
		</>
	) : (
		<>
			<div className='Loged'>
				<div className='mainLoged'>
					<div className='logedImg'>
						<div className='spinner-border' role='status'>
							<AiOutlineLoading className='spinner' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
