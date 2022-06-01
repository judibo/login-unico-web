import React, { useCallback, useState } from 'react'
import { verifyOtp } from '../services/auth/authService'
import SideBar from '../components/Header/SideBar'
import { Section, Title, Btn } from './styles'
import { Button, TextField } from '@mui/material'

export default function OneTimePassword({ enabled, handleBack }) {
	const [verificationCode, setVerificationCode] = useState('')
	const [invalidCode, setInvalidCode] = useState(false)

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault()
			const result = await verifyOtp(verificationCode)
			if (result) return (window.location = '/')
			setInvalidCode(true)
		},
		[verificationCode]
	)

	return (
		<>
			{!enabled && (
				<>
					<Title>Escaneie o QR code no seu app de autenticação</Title>
					<img src='/mfa_qr_code' alt='qr code' />
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
				<Button size='large' variant='contained' fullWidth disabled={verificationCode.length < 6} onClick={handleSubmit}>
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
