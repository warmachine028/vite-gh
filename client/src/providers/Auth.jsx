import { useState } from 'react'
import { AuthContext } from '../contexts'
import db from '../data'

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
	const [loading, setLoading] = useState(false)
	const logOut = () => {
		setUser(null)
		localStorage.removeItem('user')
	}
	const logIn = ({ email }) => {
		const user = db.users.find((user) => user.email === email)
		if (user) {
			localStorage.setItem('user', JSON.stringify(user))
			return setUser(user)
		}
		throw Error('User not Found')
	}
	const signUp = (newUser) => {
		const user = db.users.find((user) => user.email === newUser.email)
		if (user) {
			throw Error('User already exists')
		}
		newUser = { ...newUser, id: db.users.at(-1).id + 1, verified: false, joined: Date.now() }
		db.users.push(newUser)
		localStorage.setItem('user', JSON.stringify(newUser))
		setUser(newUser)
	}

	const value = { user, signUp, logIn, logOut, loading, setLoading }
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
