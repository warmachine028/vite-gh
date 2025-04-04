import { BrowserRouter } from 'react-router'
import { AppRouter } from './components'
import { AuthProvider } from './providers'

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter basename="vite-gh/">
				<AppRouter />
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
