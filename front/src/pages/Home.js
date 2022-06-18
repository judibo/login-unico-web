import React from 'react'
import { Section, Title } from './styles'
import SideBar from '../components/Header/SideBar'
import { Button, Grid, Stepper, Step, StepLabel } from '@mui/material'
import { Visibility } from '@mui/icons-material'

export default function Home() {
	return (
		<Section flexDirection='row' padding='0'>
			<SideBar />
			<Section backgroundColor='#ffffff'>
				<Title>Saldo:</Title>
				<h2>R$ 22.222.222,00 <Visibility/></h2>
				<Button simple>Ver extrato ></Button>
			</Section>
		</Section>
	)
}
