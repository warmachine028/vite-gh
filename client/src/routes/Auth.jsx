import { Navigate } from 'react-router'
import { useAuth } from '../hooks'

const Auth = ({ component }) => {
	const { user } = useAuth()
	return user ? <Navigate to="/" /> : component
}

export default Auth
