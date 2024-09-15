import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/vite-gh/',
	// build: {
	// 	rollupOptions: {
	// 		external: ['ghspa.js']
	// 	}
	// }
})
