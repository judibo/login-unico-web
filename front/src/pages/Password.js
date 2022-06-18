import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, InputPassword, Title, FormContent, HelperText, Btn } from './styles'
import { Button, Grid, Stepper, Step, StepLabel } from '@mui/material'
import { Circle } from '@mui/icons-material'
import PinPad from './PinPad'
import SideBar from '../components/Header/SideBar'
import OneTimePassword from './OneTimePassword'

function Password({ password, setPassword, handleSubmit, user }) {
	const steps = ['Senha', 'Confirmar']
	const [activeStep, setActiveStep] = useState(0)

	const handleNext = async (e) => {
		await handleSubmit(e)
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	return (
		<Section flexDirection='row' padding='0'>
			<SideBar />
			<Section backgroundColor='#ffffff' className='Password'>
				<>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {}
							const labelProps = {}

							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							)
						})}
					</Stepper>
					{activeStep === 0 && (
						<>
							<Title>
								Digite sua senha de acesso
								<br /> usando o teclado virtual abaixo.
							</Title>
							<FormContent>
								<Grid container spacing={2}>
									<Grid item xs={1}>
										<InputPassword maxLength='1'>{password.length > 0 && <Circle fontSize='small' />}</InputPassword>
									</Grid>
									<Grid item xs={1}>
										<InputPassword maxLength='1'>{password.length > 1 && <Circle fontSize='small' />}</InputPassword>
									</Grid>
									<Grid item xs={1}>
										<InputPassword>{password.length > 2 && <Circle fontSize='small' />}</InputPassword>
									</Grid>
									<Grid item xs={1}>
										<InputPassword>{password.length > 3 && <Circle fontSize='small' />}</InputPassword>
									</Grid>
									<Grid item xs={1}>
										<InputPassword>{password.length > 4 && <Circle fontSize='small' />}</InputPassword>
									</Grid>
									<Grid item xs={1}>
										<InputPassword>{password.length > 5 && <Circle fontSize='small' />}</InputPassword>
									</Grid>
								</Grid>
								<HelperText>
									Esqueceu a senha? <Link to='/recuperarSenha'>Recuperar agora</Link>
								</HelperText>
								<>
									<Btn>
										<PinPad setPassword={setPassword} password={password} />
									</Btn>
									<Btn>
										<Button size='large' variant='contained' fullWidth disabled={password.length < 6} onClick={handleNext}>
											Avançar
										</Button>
									</Btn>
								</>
							</FormContent>
						</>
					)}
					{activeStep === 1 && <OneTimePassword handleBack={handleBack} user={user} />}
				</>
			</Section>
		</Section>
	)
}

export default Password
