import { useAuth } from '../hooks'
import { FaCheck } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import moment from 'moment'
import { Link } from 'react-router'
import { IoArrowBack, IoHomeSharp } from 'react-icons/io5'

const Profile = () => {
	const { user, logOut } = useAuth()
	const handleClick = () => {
		try {
			logOut()
		} catch (error) {
			alert(error)
		}
	}
	return (
		<main className="flex w-screen flex-col items-center p-5 py-40 sm:w-auto sm:min-w-96">
			<div className="w-full sm:w-96">
				<div className="flex justify-between">
					<Link to={-1} className="flex items-center gap-2 text-white">
						<IoArrowBack className="size-6" />
					</Link>
					<Link to="/" className="flex items-center gap-2 text-white">
						<IoHomeSharp className="size-6" />
					</Link>
				</div>
				<div className="flex flex-col gap-3 rounded-lg bg-gray-300 p-3 text-black shadow-xl ring-1 ring-black">
					<h3 className="text-2xl font-semibold">Profile</h3>
					<div className="flex flex-col items-start">
						<span>
							<strong>Name: </strong>
							{user.name}
						</span>
						<span>
							<strong>Age: </strong>
							{user.age}
						</span>
						<span className="flex items-center gap-2">
							<strong>Verified: </strong>
							{user.verified ? (
								<FaCheck className="text-green-600" />
							) : (
								<RxCross2 className="text-red-600" />
							)}
						</span>
						<span>
							<strong>Joined: </strong>
							{moment(user.joined).fromNow()}
						</span>
						<span>
							<strong>Email: </strong>
							<Link to={`mailto:${user.email}`}>{user.email}</Link>
						</span>
					</div>

					<button
						className="w-full rounded-md bg-green-700 text-white transition-opacity ease-in-out hover:opacity-60 hover:ring-1 hover:ring-gray-900"
						type="button"
						onClick={handleClick}
					>
						Log Out
					</button>
				</div>
			</div>
		</main>
	)
}

export default Profile
