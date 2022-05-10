import React from 'react'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../theme/MuiTheme'

export default function Home() {

	return (
		<ThemeProvider theme={theme}>
			<div className={styles.container}>
				<meta name='description' content='Leitor de cupom fiscal' />
				<link rel='icon' href='/favicon.ico' />
				<main className={styles.main}>
					<Form />
				</main>
			</div>
		</ThemeProvider>
	)
}
