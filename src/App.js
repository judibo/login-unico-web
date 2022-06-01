import React, { useState, useCallback } from 'react'
import { auth } from './services/auth/authService'
import './App.css'
import Login from './pages/Login'
import Password from './pages/Password'
// import OneTimePassword from './pages/OneTimePassword'

function App({ user }) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState([])
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const handleLogin = (documento) => {
		setLogin(documento)
	}

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault()
			const res = await auth(login, password)
			setIsAuthenticated(res.user)
		},
		[login, password]
	)

	return (
		<div>
			{!login && !isAuthenticated && <Login login={login} handleLogin={handleLogin} />}
			{login && <Password setPassword={setPassword} password={password} handleSubmit={handleSubmit} />}
			{/* {isAuthenticated && <OneTimePassword />} */}
		</div>
	)
}

export default App
