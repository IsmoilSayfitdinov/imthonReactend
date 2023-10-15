import Aside from "../../components/Aside/Aside"
import Saidbar from "../../components/saidbar/Saidbar"
import './Liked.scss'
import imgLiked from  "../../assets/Screenshot 2022-06-04 at 20 1.png"
import {
	FiPlayCircle,
	FiHeart,
	FiDownload,
  FiSearch,
	FiMoreHorizontal,
} from 'react-icons/fi'


const Liked = () => {
  return (
		<div className='mani_liked'>
			<Saidbar />
			<div className='LikedMani'>
				<div className='Liked'>
					<div className='imgLikefd'>
						<img src={imgLiked} alt='' />
						<div className='imgLikedText'>
							<p>PUBLIC PLAYLIST</p>
							<h2>Liked Songs</h2>
						</div>
					</div>
           <div className="playD">
              <div className="Play"><FiPlayCircle/></div>
              <div className="Like"><FiHeart/></div>
              <div className="Dowland"><FiDownload/></div>
              <div className="view"><FiMoreHorizontal/></div>
               <div className="Search">
              <FiSearch/>
              <p>Custom order</p>
           </div>
           </div>
           
				</div>
        <div className="LikedPlayList">
            <div className="PlayListTitle">
                 <div className="Title">
                  <p> # TITLE</p>
                 </div>
                 <div className="Albums">
                    <p>ALBUM</p>
                 </div>
                 <div className="DATAadd">
                    <p>DATA ADDED</p>
                 </div>
            </div>
            <div className="PlayListCard">
               <div className="CardPlay">
                  {}
               </div>
            </div>
        </div>
			</div>
			<Aside />
		</div>
	)
}

export default Liked