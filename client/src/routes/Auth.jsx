import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

const Auth = ({ component }) => {
	const { user } = useAuth()
	return user ? <Navigate to="/" /> : component
}

export default Auth
