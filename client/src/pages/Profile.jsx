import { useAuth } from '../hooks'
import { FaCheck } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import moment from 'moment'

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
		<main>
			<div className="h-3/4 ring-1 w-full p-3 rounded-lg ring-black shadow-xl bg-gray-300 text-black flex flex-col gap-3 min-w-96">
				<h3 className="text-2xl font-semibold">Profile</h3>
				<div className="flex items-start flex-col">
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
						{user.verified ? <FaCheck className="text-green-600" /> : <RxCross2 className="text-red-600" />}
					</span>
					<span>
						<strong>Joined: </strong>
						{moment(user.joined).fromNow()}
					</span>
					<span>
						<strong>Email: </strong>
						{user.email}
					</span>
				</div>

				<button
					className="bg-green-700 text-white rounded-md hover:opacity-60 hover:ring-1 hover:ring-gray-900 transition-opacity ease-in-out w-full"
					type="button"
					onClick={handleClick}
				>
					Log Out
				</button>
			</div>
		</main>
	)
}

export default Profile
