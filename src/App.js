import React, { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Password from './pages/Password'

function App() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (documento) => {
		setLogin(documento)
	}

	return (
		<div>
			{!login && <Login login={login} handleSubmit={handleSubmit} />}
			{login && <Password login={login} />}
		</div>
	)
}

export default App
