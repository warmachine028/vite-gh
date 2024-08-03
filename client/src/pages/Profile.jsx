import { useAuth } from '../hooks'
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
			<div className="h-3/4 ring-1 w-full p-3 rounded-lg ring-black shadow-xl bg-gray-300 text-black flex flex-col gap-3">
				<h3 className="text-2xl font-semibold">Profile</h3>
				<span>
					<strong>Name: </strong>
					{user.name}
				</span>
				<span>
					<strong>Age: </strong>
					{user.age}
				</span>
				<span>
					<strong>Verified: </strong>
					{user.verified}
				</span>
				<span>
					<strong>Joined: </strong>
					{moment(user.joined).fromNow()}
				</span>
				<span>
					<strong>Email: </strong>
					{user.email}
				</span>
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
