import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { TextContextProvider } from '@context'

import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TextContextProvider>
			<App />
		</TextContextProvider>
	</StrictMode>
)
