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
		<main className="flex w-screen flex-col items-center p-5 py-40 sm:w-auto sm:min-w-96">
			<div className="flex w-full justify-between sm:w-96">
				<Link to={-1} className="flex items-center gap-2 text-white">
					<IoArrowBack className="size-6" />
				</Link>
				<Link to="/" className="flex items-center gap-2 text-white">
					<IoHomeSharp className="size-6" />
				</Link>
			</div>
			<form
				className="flex h-3/4 w-full flex-col gap-3 rounded-lg bg-gray-300 p-3 text-black shadow-xl ring-1 ring-black sm:w-96"
				onSubmit={handleSubmit}
			>
				<h3 className="text-2xl font-semibold">Welcome Back!</h3>
				<div className="grid grid-cols-3 gap-2">
					<label htmlFor="email" className="text-start text-lg">
						Email:
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						id="email"
						autoComplete="email"
						className="col-span-2 rounded-md bg-transparent p-2 ring-1 ring-black placeholder:italic placeholder:text-slate-500"
						placeholder="srija.adhya@email.com"
						required
					/>
					<label htmlFor="password" className="text-start text-lg">
						Password:
					</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						id="password"
						autoComplete="current-password"
						className="col-span-2 rounded-md bg-transparent p-2 ring-1 ring-black placeholder:italic placeholder:text-slate-500"
						placeholder="1@#asB1438"
						required
					/>
				</div>
				<button
					className="w-full rounded-md bg-blue-700 text-white transition-opacity ease-in-out hover:opacity-60 hover:ring-1 hover:ring-gray-900"
					type="submit"
				>
					Log In
				</button>
				<span>
					Don&apos;t have an account?
					<Link to="/signup" className="underline">
						Sign Up
					</Link>
				</span>
			</form>
		</main>
	)
}

export default LogIn
