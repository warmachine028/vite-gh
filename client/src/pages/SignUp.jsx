import { useState } from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router'
import { IoArrowBack, IoHomeSharp } from 'react-icons/io5'

const SignUp = () => {
	const initialData = { name: '', email: '', password: '', age: '' }
	const { signUp } = useAuth()
	const [formData, setFormData] = useState(initialData)
	const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })
	const handleSubmit = (event) => {
		event.preventDefault()
		try {
			signUp(formData)
		} catch (error) {
			alert(error)
		}
	}
	return (
		<main className="flex w-screen flex-col items-center p-5 py-40 sm:w-auto sm:min-w-96">
			<div className="w-full sm:w-96">
				<div className="flex justify-between">
					<Link to={-1} className="flex items-center gap-2 text-white">
						<IoArrowBack className="size-6" />
					</Link>
					<Link to="/" className="flex items-center gap-2 text-white">
						<IoHomeSharp className="size-6" />
					</Link>
				</div>

				<form
					className="flex h-3/4 w-full flex-col gap-3 rounded-lg bg-gray-300 p-3 text-black shadow-xl ring-1 ring-black"
					onSubmit={handleSubmit}
				>
					<h3 className="text-2xl font-semibold">Join Us!</h3>
					<div className="grid grid-cols-3 gap-2">
						<label htmlFor="name" className="text-start text-lg">
							Name:
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							id="name"
							autoComplete="name"
							className="col-span-2 rounded-md bg-transparent p-2 ring-1 ring-black placeholder:italic placeholder:text-slate-500"
							placeholder="Srija Adhya"
							required
						/>
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
						<label htmlFor="age" className="text-start text-lg">
							Age:
						</label>
						<input
							type="numeric"
							name="age"
							value={formData.age}
							onChange={handleChange}
							id="age"
							pattern="\d*"
							className="col-span-2 rounded-md bg-transparent p-2 ring-1 ring-black placeholder:italic placeholder:text-slate-500"
							placeholder="21"
							required
						/>
					</div>
					<button
						className="w-full rounded-md bg-blue-700 text-white transition-opacity ease-in-out hover:opacity-60 hover:ring-1 hover:ring-gray-900"
						type="submit"
					>
						Sign Up
					</button>
					<span>
						Already have an account?
						<Link to="/login" className="underline">
							Log In
						</Link>
					</span>
				</form>
			</div>
		</main>
	)
}

export default SignUp
