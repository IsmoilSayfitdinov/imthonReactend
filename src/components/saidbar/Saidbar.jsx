import './Saidbar.scss'
import { FiHome, FiSearch } from 'react-icons/fi'
import {BiLibrary} from "react-icons/bi"
import {SiAddthis} from "react-icons/si"
import { useState } from 'react'
import imgLike from '../../assets/Liked Songs_S.png'
import { Link } from "react-router-dom"

const Saidbar = () => {

                const [cliendata, setClientData] = useState([])
               


				const TOKEN = localStorage.getItem('token')

				const fetchData = async () => {
					try {
						const response = await fetch(
							'https://api.spotify.com/v1/browse/featured-playlists',
							{
								headers: {
									'Authorization': TOKEN,
									'Content-Type': 'application/json',
								},
							}
						)
						const data = await response.json()
						data.playlists.items.length = 13;
                        setClientData(data?.playlists?.items)
					} catch (error) {
						console.log(error)
					}
				}
				fetchData()

  return (
		<div className='main__saidbar'>
			<div className='Saidbar'>
				<div className='IconsViwe'>
					<ul className='ulSaidbarIcons'>
							<Link to="/">
						<li className='SaidbarName'>
								<FiHome className='iconsS' /> <p>Home</p>
						</li>
							</Link>
						<li className='SaidbarName'>
							<FiSearch className='iconsS' />
							<p>Search</p>
						</li>
						<li className='SaidbarName'>
							<BiLibrary className='iconsS' />
							<p>You Library</p>
						</li>
						<br />
						<br />
						<li className='SaidbarName'>
							<SiAddthis className='iconsS' />
							<p>Create PlayList</p>
						</li>
							<Link to='/liked'>
						<li className='SaidbarName'>
								<img src={imgLike} alt='' />
								<p>Liked Song</p>
						</li>
							</Link>
					</ul>
				</div>
				<div className='iconsViewTitle'>
                         {
                            cliendata?.map((itemsView) => {
                                return (
                                    <div className='textView' key={itemsView.id}>
                                        <p style={{color: '#fff'}} className='nameTitle'>{itemsView.name}</p>
                                    </div>
                                )
                            })
                         }
                </div>
			</div>
		</div>
	)
}

export default Saidbar