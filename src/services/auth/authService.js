export async function auth(username, password) {
	const res = await fetch('/authenticate', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	})

	if (res.status === 404) return {user: true}

	const user = await res.json()

	return { user }
}

export async function verifyOtp(code) {
  const res = await fetch('/verify_otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });

  return res.json();
}


// endpoint /cliente