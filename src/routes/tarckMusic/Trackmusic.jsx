import { useSelector } from "react-redux";
import "./Trackmusic.scss"
import { useRef, useState } from "react";
import {
	FiPlayCircle,
	FiPauseCircle,
	FiVolume2,
} from 'react-icons/fi'

const Trackmusic = () => {
  const [playsMusic , setPlay] = useState(true)
  const musicRedux = useSelector(state => state?.MusicTracksProducts?.musicTarck)
  const audios = useRef()
  function plays(){
	const a = audios.current

	if (!playsMusic) {
		setPlay(true)
		a.play()
	}
	
	if(playsMusic){ {
		setPlay(false)
		a.pause()
	}

  }

}



function rangeSize(e) {
	const a = audios.current
	a.currentTime = (a.duration / 129) * e.target.value
}

function volumeSize(e) {
	const a = audios.current
	a.volume = e.target.value / 100

}


return musicRedux?.preview_url?.includes('http') ? (
	<>
		<div className='mainMusic'>
			<div className='Music'>
				<div className='imgMusic'>
					<img src={musicRedux?.album?.images?.[0]?.url} alt='' />
					<div className='textImg'>
						<p>{musicRedux.name}</p>
						<span>{musicRedux?.album?.name}</span>
					</div>
				</div>
				<div className='audo'>
					<audio
						autoPlay
						ref={audios}
						controls
						src={musicRedux?.preview_url}
					></audio>
					{playsMusic ? (
						<FiPauseCircle onClick={plays} className='button' />
					) : (
						<FiPlayCircle onClick={plays} className='button' />
					)}
					<div className='range'>
						<input type='range' onChange={rangeSize} />
					</div>
				</div>
				<div className='volume'>
					<div className='IconVolume'>
						<FiVolume2 className='icons' />
					</div>
					<input type='range' onChange={volumeSize} />
				</div>
			</div>
		</div>
	</>
) : (
	<></>
)
	
}
export default Trackmusic