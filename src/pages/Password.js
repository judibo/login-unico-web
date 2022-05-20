import React from 'react'
import {
	Section,
	SideSection,
	HeaderContainer,
	ProfileImage,
	InputPasswordContainer,
	InputPassword,
	Title,
	FormContent,
	HelperText,
	Btn
} from './styles'
import { Button, Fab, Grid } from '@mui/material'
import { Circle, Backspace } from '@mui/icons-material'

function Password({ documento, setDocumento }) {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

	return (
		<Section flexDirection='row' padding='0'>
			<SideSection backgroundColor='#ffffff'>
				<HeaderContainer>
					<img src='./logo-banco-pan.svg' alt='Logo-Banco-Pan' href='/' />
				</HeaderContainer>
				<div style={{ margin: '10px 0' }}>
					<ProfileImage>
						<img src='https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg' alt='Logo-Banco-Pan' href='/' />
					</ProfileImage>
					<p>Jorge Silva</p>
				</div>
			</SideSection>
			<Section backgroundColor='#ffffff' className='Password'>
				<Title>Digita sua senha de acesso usando o teclado virtual abaixo.</Title>
				<FormContent>
					<Grid container spacing={2}>
						<Grid item xs={1}>
							<InputPassword>
								<Circle fontSize='small' />
							</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>
								<Circle fontSize='small' />
							</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>
								<Circle fontSize='small' />
							</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>
								<Circle fontSize='small' />
							</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>
								<Circle fontSize='small' />
							</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>
								<Circle fontSize='small' />
							</InputPassword>
						</Grid>
					</Grid>
					<HelperText>
						Esqueceu a senha?{' '}
						<a href='/' alt='Recuperar senha'>
							Recuperar agora
						</a>
					</HelperText>
					<>
						<Btn>
							<Fab variant='contained'>1 ou 2</Fab>
							<Fab variant='contained'>3 ou 4</Fab>
							<Fab variant='contained'>5 ou 6</Fab>
							<Fab variant='contained'>7 ou 8</Fab>
							<Fab variant='contained'>9 ou 0</Fab>
							<Fab variant='contained'>
								<Backspace />
							</Fab>
						</Btn>
						<Btn>
							<Button variant='contained' fullWidth>
								Avançar
							</Button>
						</Btn>
					</>
				</FormContent>
			</Section>
		</Section>
	)
}

export default Password
