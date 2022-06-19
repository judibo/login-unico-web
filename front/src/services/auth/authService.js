export async function auth(username, password) {
	const res = await fetch('http://localhost:8080/authenticate', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username: '00392940132', password: '123476' })
	})

	if (res.status === 404) return { authUser: true }

	const authUser = await res.json()

	return { authUser }
}

export async function buscarCliente(jwt) {
	const res = await fetch('http://localhost:8080/cliente/1', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` }
	})

	return res.json()
}
export async function atualizarCliente(jwt, body) {
	const res = await fetch('http://localhost:8080/cliente/1', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
		body: JSON.stringify({ username: '00392940132', password: '123496' })
	})

	return res.json()
}

export async function verifyUser(username, verificationCode) {
	const res = await fetch('http://localhost:8080/forgot', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username: '00392940132', newPassword: verificationCode })
	})

	return res.json()
}
