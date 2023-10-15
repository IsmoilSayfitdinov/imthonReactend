import { useSelector } from "react-redux";
import Saidbar from "../../components/saidbar/Saidbar";
import "./ProductsView.scss"
import Aside from "../../components/Aside/Aside";
import { useEffect, useState } from "react";
import {
	FiPlayCircle,
	FiHeart,
	FiDownload,
  FiSearch,
	FiMoreHorizontal,
} from 'react-icons/fi'

const ProductsVies = () => {
     const [tracks , setTracke] = useState([])
     let Products = useSelector(state => state.productItems.product)
     const TOKEN = localStorage.getItem('token')
     console.log(Products);
     const [liked , setLiked] = useState(false)
    
     useEffect(() => {
				const fetchTarck = async () => {
					const response = await fetch(
						`https://api.spotify.com/v1/playlists/${Products?.id} `,
						{
							headers: {
								Authorization: TOKEN,
								'Content-Type': 'application/json',
							},
						}
					)
					const data = await response.json()
					setTracke(data?.tracks?.items)
				}

				fetchTarck()
			}, [Products?.id])

      console.log(liked)


      function setLikeds(){
        setLiked(!false)
      }

  return (
		<div className='main_products'>
			<div className='mainsPr'>
				<Saidbar />
				<div className='products_music'>
					<div className='musicsview'>
						<div className='imgAndTExt'>
							<img src={Products?.images?.[0].url} alt='' />
							<div className='textView'>
								<p>PUBLIC PLAYLIST</p>
								<h1>{Products?.name}</h1>
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
							<div className='PlayListCard'>
								<div className='CardPlay'>
									{tracks?.map(item => (
										<div className='TrackItmes' key={item?.id}>
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
												<p
													className={liked ? 'active' : 'notActive'}
													onClick={(e) => setLikeds(e.target)}
												>
													<FiHeart onClick={(e) => setLikeds(e.target)} />
												</p>
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
	)
}

export default ProductsVies