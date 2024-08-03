import { useState } from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import { IoArrowBack, IoHomeSharp } from 'react-icons/io5'

const LogIn = () => {
	const initialData = { email: '', password: '' }
	const { logIn } = useAuth()
	const [formData, setFormData] = useState(initialData)
	const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })
	const handleSubmit = (event) => {
		event.preventDefault()
		try {
			logIn(formData)
		} catch (error) {
			alert(error)
		}
	}
	return (
		<main>
			<div className="w-full flex justify-between">
				<Link to={-1} className="flex gap-2 items-center text-white">
					<IoArrowBack className="size-6" />
				</Link>
				<Link to="/" className="flex gap-2 items-center text-white">
					<IoHomeSharp className="size-6" />
				</Link>
			</div>
			<form
				className="h-3/4 ring-1 w-full p-3 rounded-lg ring-black shadow-xl bg-gray-300 text-black flex flex-col gap-3"
				onSubmit={handleSubmit}
			>
				<h3 className="text-2xl font-semibold">Welcome Back!</h3>
				<div className="grid grid-cols-3 gap-2">
					<label htmlFor="email" className="text-lg text-start">
						Email:
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						id="email"
						autoComplete="email"
						className="bg-transparent ring-1 ring-black placeholder:text-slate-500 p-2 rounded-md col-span-2 placeholder:italic"
						placeholder="srija.adhya@email.com"
						required
					/>
					<label htmlFor="password" className="text-lg text-start">
						Password:
					</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						id="password"
						autoComplete="current-password"
						className="bg-transparent ring-1 ring-black placeholder:text-slate-500 p-2 rounded-md col-span-2 placeholder:italic"
						placeholder="1@#asB1438"
						required
					/>
				</div>
				<button
					className="bg-blue-700 text-white rounded-md hover:opacity-60 hover:ring-1 hover:ring-gray-900 transition-opacity ease-in-out w-full"
					type="submit"
				>
					Log In
				</button>
				<span>
					Don't have an account?
					<Link to="/signup" className="underline">
						Sign Up
					</Link>
				</span>
			</form>
		</main>
	)
}

export default LogIn
