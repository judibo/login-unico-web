import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SideBar from '../components/Header/SideBar'
import { Section, HeaderContainer, Title, FormContent, Btn } from './styles'

function EsqueciSenhaForm({ handleEsqueciSenhaForm }) {
	const [documento, setDocumento] = useState('')

	const handlerDocumento = async (e) => {
		const valueDocumento = e.currentTarget.value
		setDocumento(valueDocumento)
	}

	const handleParent = () => {
		handleEsqueciSenhaForm(documento)
	}

	const onChange = (value) => {
		console.log('Captcha value:', value)
	}

	return (
		<Section flexDirection='row' padding='0'>
			<SideBar />
			<Section backgroundColor='#ffffff' className='Password'>
				<Title>
					Para recuperar a senha <br />
					digite o seu CPF ou CNPJ.
				</Title>
				<FormContent>
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
					<Btn>
						<Button size='large' variant='contained' fullWidth onClick={handleParent} disabled={documento.length < 14}>
							Recuperar senha
						</Button>
					</Btn>
				</FormContent>
			</Section>
		</Section>
	)
}

export default EsqueciSenhaForm
