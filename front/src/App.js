import React, { useState, useCallback } from 'react'
import { auth } from './services/auth/authService'
import './App.css'
import Login from './pages/Login'
import Password from './pages/Password'

function App() {
	const [username, setLogin] = useState('')
	const [password, setPassword] = useState([])
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useState({})

	const handleLogin = (documento) => {
		setLogin(documento)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await auth(username, password)
		setUser({ username, ...res.authUser })
	}

	return (
		<div>
			{!username && !isAuthenticated && <Login handleLogin={handleLogin} />}
			{username && <Password setPassword={setPassword} password={password} handleSubmit={handleSubmit} user={user} />}
		</div>
	)
}

export default App
