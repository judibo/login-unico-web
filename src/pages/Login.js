import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import ReCAPTCHA from 'react-google-recaptcha'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Section, HeaderContainer, Title, FormContent, Btn } from './styles'

function Login({ handleSubmit }) {
	const [documento, setDocumento] = useState('')

	const handlerDocumento = async (e) => {
		const valueDocumento = e.currentTarget.value
		setDocumento(valueDocumento)
	}

	const handleParent = () => {
		handleSubmit(documento)
	}

	const onChange = (value) => {
		console.log('Captcha value:', value)
	}

	return (
		<Section backgroundColor='#03a9f4' bgImg='https://accountstemplates.bancopan.com.br/assets/img/bem-vindo.svg'>
			<HeaderContainer>
				<img src='./logo-banco-pan.svg' alt='Logo-Banco-Pan' href='/' />
			</HeaderContainer>
			<Title>
				Para acessar o <br />
				web banking, precisamos
				<br />
				do seu CPF ou CNPJ.
			</Title>
			<FormContent backgroundColor='#03a9f4'>
				<InputMask
					mask={documento ? (documento.length <= 14 ? '999.999.999-999' : '99.999.999/9999-99') : '99.999.999/9999-99'}
					onChange={handlerDocumento}
					disabled={false}
					value={documento}
					maskChar=''
					id='documento'
				>
					{() => (
						<TextField
							placeholder='Digite seu CPF ou CNPJ'
							id='documento'
							helperText={'Use apenas números'}
							variant='standard'
							onChange={handlerDocumento}
							maxLength='18'
							fullWidth
						/>
					)}
				</InputMask>
				<ReCAPTCHA sitekey='6Lf-2gMgAAAAABMVlGHI2ocXz9fW_3xcFr8nKA4m' onChange={onChange} />
				<Btn>
					<Button size="large" variant='contained' fullWidth onClick={handleParent} disabled={documento.length < 14}>
						Entrar
					</Button>
				</Btn>
			</FormContent>
		</Section>
	)
}

export default Login
