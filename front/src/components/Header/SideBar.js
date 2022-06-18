import React from 'react'
import {
	SideSection,
	HeaderContainer,
	ProfileImage,
	SideBanner,
} from './styles'

function SideBar() {
	return (
		<SideSection backgroundColor='#ffffff'>
			<HeaderContainer style={{ margin: '6rem auto 0 auto' }}>
				<img src='./logo-banco-pan.svg' alt='Logo-Banco-Pan' href='/' />
			</HeaderContainer>
			<div style={{ margin: '10px 0', padding: '0 6rem', textAlign: 'center' }}>
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
	)
}

export default SideBar
