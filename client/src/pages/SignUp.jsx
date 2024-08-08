import { useState } from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
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
		<main className="w-screen sm:min-w-96 sm:w-auto flex flex-col items-center p-5 py-40">
			<div className="sm:w-96 w-full">
				<div className=" flex justify-between ">
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
					<h3 className="text-2xl font-semibold">Join Us!</h3>
					<div className="grid grid-cols-3 gap-2">
						<label htmlFor="name" className="text-lg text-start">
							Name:
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							id="name"
							autoComplete="name"
							className="bg-transparent ring-1 ring-black placeholder:text-slate-500 p-2 rounded-md col-span-2 placeholder:italic"
							placeholder="Srija Adhya"
							required
						/>
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
						<label htmlFor="age" className="text-lg text-start">
							Age:
						</label>
						<input
							type="numeric"
							name="age"
							value={formData.age}
							onChange={handleChange}
							id="age"
							pattern="\d*"
							className="bg-transparent ring-1 ring-black placeholder:text-slate-500 p-2 rounded-md col-span-2 placeholder:italic"
							placeholder="21"
							required
						/>
					</div>
					<button
						className="bg-blue-700 text-white rounded-md hover:opacity-60 hover:ring-1 hover:ring-gray-900 transition-opacity ease-in-out w-full"
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
