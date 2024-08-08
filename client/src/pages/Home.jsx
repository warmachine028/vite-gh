import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'
import { CgProfile } from 'react-icons/cg'
import { IoMdLogIn } from 'react-icons/io'

const Home = () => {
	const [count, setCount] = useState(0)
	const handleClick = () => setCount((count) => count + 1)
	const { user } = useAuth()
	return (
		<main className="w-screen sm:min-w-96 sm:w-auto flex flex-col items-center py-40 p-5">
			<div className="w-full px-10 sm:w-96">
				{user ? (
					<Link to="/profile" className="flex gap-2 items-center">
						<CgProfile className="size-6" />
						<span className="text-sm">{user.name}</span>
					</Link>
				) : (
					<Link to="/login" className="flex gap-2 items-center">
						<IoMdLogIn className="size-6" />
						<span className="text-sm">Log In</span>
					</Link>
				)}
			</div>
			<div className="flex justify-center">
				<Link to="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</Link>
				<Link to="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</Link>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={handleClick} type="button">
					count is {count}
				</button>
				<p className="mt-5">
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</main>
	)
}

export default Home
