import React, { useState } from 'react'
import {
	Section,
	SideSection,
	HeaderContainer,
	ProfileImage,
	SideBanner,
	InputPassword,
	Title,
	FormContent,
	HelperText,
	Btn
} from './styles'
import { Button, Grid } from '@mui/material'
import { Circle } from '@mui/icons-material'
import PinPad from './PinPad'

function Password({ documento, setDocumento }) {
	const [pin, setPin] = useState('')

	return (
		<Section flexDirection='row' padding='0'>
			<SideSection backgroundColor='#ffffff'>
				<HeaderContainer>
					<img src='./logo-banco-pan.svg' alt='Logo-Banco-Pan' href='/' />
				</HeaderContainer>
				<div style={{ margin: '10px 0', padding: '0 6rem' }}>
					<div>
						<ProfileImage>
							<img src='https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg' alt='Logo-Banco-Pan' href='/' />
						</ProfileImage>
						<p>Jorge Silva</p>
					</div>
				</div>
				<SideBanner>
					<p>Pra continuar, baixe o app do Pan e crie sua conta grátis</p>
					<img src='https://accountstemplates.bancopan.com.br/assets/img/mao_celular.svg' alt='Baixe o App' href='/' />
					<p>Baixe o app!</p>
				</SideBanner>
			</SideSection>
			<Section backgroundColor='#ffffff' className='Password'>
				<Title>Digita sua senha de acesso usando o teclado virtual abaixo.</Title>
				<FormContent>
					<Grid container spacing={2}>
						<Grid item xs={1}>
							<InputPassword maxLength='1'>{pin && <Circle fontSize='small' />}</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword maxLength='1'>{pin.length > 3 && <Circle fontSize='small' />}</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>{pin.length > 6 && <Circle fontSize='small' />}</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>{pin.length > 9 && <Circle fontSize='small' />}</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>{pin.length > 12 && <Circle fontSize='small' />}</InputPassword>
						</Grid>
						<Grid item xs={1}>
							<InputPassword>{pin.length > 15 && <Circle fontSize='small' />}</InputPassword>
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
							<PinPad const pin={pin} setPin={setPin} />
						</Btn>
						<Btn>
							<Button size='large' variant='contained' fullWidth disabled={pin.length < 18}>
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
