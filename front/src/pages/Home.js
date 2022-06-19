import React, { useState } from 'react'
import { Section, Title, Btn } from './styles'
import SideBar from '../components/Header/SideBar'
import { Button, TextField } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import { atualizarCliente } from '../services/auth/authService'

export default function Home() {
	const [newProfile, setNewProfile] = useState({})

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await atualizarCliente({ jwt: '', user: { newProfile } })
		console.log(res)
	}

	return (
		<Section flexDirection='row' padding='0'>
			<SideBar />
			{/* <Section backgroundColor='#ffffff'>
				<Title>Saldo:</Title>
				<h2>
					R$ 22.222.222,00 <Visibility />
				</h2>
				<Button variant='simple'>Ver extrato ></Button>
			</Section> */}
			<Section backgroundColor='#ffffff'>
				<Title>Atualizar cadastro:</Title>
				<h3>Nome:</h3>
				<TextField id='nome' variant='standard' onChange={(e) => setNewProfile(e.target.value)} maxLength='6' fullWidth />
				<h3>E-mail:</h3>
				<TextField id='email' variant='standard' onChange={(e) => setNewProfile(e.target.value)} maxLength='6' fullWidth />
				<h3>Nova senha:</h3>
				<TextField id='nova-senha' variant='standard' onChange={(e) => setNewProfile(e.target.value)} maxLength='6' fullWidth />
				<Btn>
					<Button variant='contained' onClick={handleSubmit}>
						Atualizar
					</Button>
				</Btn>
			</Section>
		</Section>
	)
}
