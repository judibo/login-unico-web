import React, { useCallback, useEffect, useState } from 'react'
import { buscarCliente, verifyUser } from '../services/auth/authService'
import { Section, Title, Btn, QRCodeImg } from './styles'
import { Button, TextField } from '@mui/material'

export default function OneTimePassword({ enabled, handleBack, user }) {
	const [verificationCode, setVerificationCode] = useState('')
	const [invalidCode, setInvalidCode] = useState(false)
	const [QRCode, setQRCode] = useState(
		'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQAAAAA2RLUcAAAAdUlEQVR4XmP4DwYHGOhG/2G5IA+i/367fh9Mi4bEQ+gtEFqkBEJ//w6W/8MaAFb//189RL9pDlj+36rb88HiFw6Axf/m+kP4rLr1YPpvNljdH7ZUe4h5bPvBtJgZ1N63EL6IDlj93y9TwPr/sEiBxdHdTR8aAJ5+MEvpUJS0AAAAAElFTkSuQmCC'
	)

	useEffect(() => {
		if (user.jwt) {
			const res = buscarCliente(user.jwt)
			// setQRCode(res.secretImageUri)
		}
		if (user.isBlocked) console.log(user.isBlocked)
	}, [user])

	const handleSubmit = useCallback(
		async (e) => {
			const result = await verifyUser(user.username, verificationCode)
			if (result.jwt) return (window.location = '/home')
			if (result.isBlocked) return (window.location = '/recuperarSenha')
			setInvalidCode(true)
		},
		[verificationCode, user.username]
	)

	return (
		<>
			{user.isBlocked && <Title>Seu usuário está bloqueado, por favor resete a sua senha.</Title>}
			{!enabled && (
				<>
					<Title>Escaneie o QR code no seu app de autenticação</Title>
					<QRCodeImg src={`data:image/png;base64,${QRCode}`} alt='qr code' />
				</>
			)}

			<TextField
				placeholder='Digite código de autenticação'
				id='2fa'
				variant='standard'
				onChange={(e) => setVerificationCode(e.target.value)}
				maxLength='6'
				fullWidth
			/>

			<Btn>
				<Button size='large' variant='contained' fullWidth disabled={verificationCode.length < 4} onClick={handleSubmit}>
					Confirmar
				</Button>
			</Btn>
			<Button size='large' variant='simple' fullWidth disabled={verificationCode === 0} onClick={handleBack}>
				Voltar
			</Button>

			{invalidCode && <p>Invalid verification code</p>}
		</>
	)
}
