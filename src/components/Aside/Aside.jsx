import "./Aside.scss"
import { FaUserAlt } from 'react-icons/fa'
const Aside = () => {
  return (
		<div>
			<div className='main__aside'>
				<div className='aside'>
					<div className='textAside'>
						<p>Friend Activity</p>
						<span>X</span>
					</div>
					<div className='textaside'>
						<p>
							Let friends and followers on Spotify see what you’re listening to.
						</p>
					</div>
					<div className='UsersBlock'>
						<div className='user'>
							<FaUserAlt />
						</div>
						<div className='user'>
							<FaUserAlt />
						</div>
						<div className='user'>
							<FaUserAlt />
						</div>
					</div>
					<div className='textAsideU'>
						<p>
							Go to Settings Social and enable “Share my listening activity on
							Spotify.’ You can turn this off at any time.
						</p>
					</div>
					<div className='btn'>
						<button>SETTINGS</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aside