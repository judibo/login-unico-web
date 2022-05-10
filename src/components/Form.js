import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormContent, Btn } from './styles'
import InputMask from 'react-input-mask'

function Form() {
	const [documento, setDocumento] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		alert('Enviar usuário')
	}

	const handlerDocumento = async e => {
    const valueDocumento = e.currentTarget.value
    setDocumento(valueDocumento)
  }
	return (
		<>
			<h2>Para acessar o web banking, precisamos do seu CPF ou CNPJ.</h2>
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
					<Button variant='contained' fullWidth onSubmit={handleSubmit}>
						Entrar
					</Button>
				</Btn>
			</FormContent>
		</>
	)
}

export default Form
