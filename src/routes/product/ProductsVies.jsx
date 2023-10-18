import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Saidbar from "../../components/saidbar/Saidbar";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './ProductsView.scss'
import { AiOutlineLoading, AiFillHeart } from 'react-icons/ai'
import {
	FiPlayCircle,
	FiHeart,
	FiDownload,
	FiSearch,
	FiMoreHorizontal,
} from 'react-icons/fi'
import Aside from "../../components/Aside/Aside";

const ProductsVies = () => {
	let Products = useSelector(state => state.productItems.product)
	const TOKEN = localStorage.getItem('token')
	const dispatch = useDispatch()
     const [tracks , setTracke] = useState({})
	const [logid , setLogid] = useState(false)

     useEffect(()=> {
		const fetchTarck = async () => {
			const response = await fetch(
				`https://api.spotify.com/v1/playlists/${Products?.id} `,
				{
					headers: {
						'Authorization': TOKEN,
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			setLogid(true)
			setTracke(data?.tracks?.items)
		}

		fetchTarck()
		}, [Products?.id])

  

	function setMusic(music) {
		dispatch({musicIsTrack:music , type:"@MUSIC"})
		console.log(music)
	}


	function setLikeds (itemLikes){
		dispatch({likedMusic:itemLikes , type:"@LIKED"})
        console.log(itemLikes)

	}


  return logid ? (
		<div className='main_products'>
			<div className='mainsPr'>
				<Saidbar />
				<div className='products_music'>
					<div className='Nexts'>
						<div className='divsNex'>
							<FiChevronLeft />
						</div>
						<div className='divsNex'>
							<FiChevronRight />
						</div>
					</div>
					<div className='musicsview'>
						<div className='imgAndTExt'>
							<img src={Products?.images?.[0].url} alt='' />
							<div className='textView'>
								<p>PUBLIC PLAYLIST</p>
								<h1>{Products?.name.slice(0, 9)}</h1>
								<span>{Products?.description.slice(0, 35) + '...'}</span>
							</div>
						</div>
						<div className='playD'>
							<div className='Play'>
								<FiPlayCircle />
							</div>
							<div className='Like'>
								<FiHeart />
							</div>
							<div className='Dowland'>
								<FiDownload />
							</div>
							<div className='view'>
								<FiMoreHorizontal />
							</div>
							<div className='Search'>
								<FiSearch />
								<p>Custom order</p>
							</div>
						</div>
						<div className='LikedPlayList'>
							<div className='PlayListTitle'>
								<div className='Title'>
									<p> # TITLE</p>
								</div>
								<div className='Albums'>
									<p>ALBUM</p>
								</div>
								<div className='DATAadd'>
									<p>DATA ADDED</p>
								</div>
							</div>
							<div className='PlayListCard' key={Products?.id}>
								<div className='CardPlay'>
									{tracks?.map(item => (
										<div
											className='TrackItmes'
											key={item?.id}
											onClick={() => setMusic(item?.track)}
										>
											<div className='imgTextTracks'>
												<img src={item?.track?.album?.images[0].url} alt='' />
												<div className='imgTetxTrak'>
													<p>{item?.track?.name}</p>
													<span>{Products?.name}</span>
												</div>
											</div>
											<div className='AlbumsTrack'>
												<p>{item?.track?.album?.name}</p>
											</div>
											<div className='AddesDate'>
												<AiFillHeart
													className={'active'}
													onClick={() => setLikeds(item?.track)}
												/>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Aside />
		</div>
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

export default ProductsVies