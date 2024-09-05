import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, LogIn, NotFound, Profile, SignUp } from '../pages'
import { AuthRoute, PrivateRoute } from '../routes'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes location={location}>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<PrivateRoute component={<Profile />} />} />
			<Route path="/login" element={<AuthRoute component={<LogIn />} />} />
			<Route path="/signup" element={<AuthRoute component={<SignUp />} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRouter
