import { Navigate } from 'react-router'
import { useAuth } from '../hooks'

const Private = ({ component }) => {
	const { user } = useAuth()
	return user ? component : <Navigate to="/login" />
}

export default Private
