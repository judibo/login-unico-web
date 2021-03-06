import styled from 'styled-components'

export const Section = styled.div`
	background-color: ${(props) => props.backgroundColor || '#fff'};
	height: 100vh;
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'column'};
	padding: ${(props) => props.padding || '0 6rem'};
	background-repeat: no-repeat;
	background-size: contain;
	background-image: ${(props) => `url(${props.bgImg})`|| 'none'};
	background-position-x: right;
	&.Password {
		margin-top: 6rem;
		width: 70%;
	}
`

export const HeaderContainer = styled.header`
	margin-top: 6rem;
`

export const FormContent = styled.div`
	display: block;
	background-color: ${(props) => props.backgroundColor || '#fff'};
	margin-top: 300px;

	& .MuiFormControl-root.MuiTextField-root {
		width: 100%;
	}
	& .MuiInputBase-root.MuiInput-root {
		color: #ffffff;
		font-size: 3.5rem;
	}
	& .MuiFormHelperText-root {
		font-weight: 700;
	}
	& .MuiFab-root {
		width: 80px;
		height: 80px;
		margin: 20px 20px 0 0;
	}
`
export const Btn = styled.div`
	padding: 2rem 0;
	justify-content: space-between;
	display: flex;
	width: 100%;

	& .pinPad {
		@media screen and (max-width: 500px) {
			width: 60%;
		}
	}
`
export const Title = styled.h2`
	font-size: 2.5rem;
	font-weight: 700;
	font-family: 'Montserrat', sans-serif;
	text-align: left;

	font-family: 'CircularAirPro-Bold', Arial, Helvetica, sans-serif;
	letter-spacing: -0.02em;
	font-size: 24px;
	line-height: 28px;
`
export const HelperText = styled.p`
	font-family: 'CircularAirPro-Bold', Arial, Helvetica, sans-serif;
	text-align: left;
	& a {
		color: #03a9f4;
	}
`
export const InputPasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 40%;
`
export const InputPassword = styled.div`
	border: 1px solid #c7c7c7;
	border-radius: 4px;
	width: 40px;
	height: 40px;
	text-align: center;
	line-height: 50px;
	color: #03a9f4;
`
export const QRCodeImg = styled.img`
	width: 200px;
	heigth: 200px`

