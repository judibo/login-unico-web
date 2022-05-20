import styled from 'styled-components'

export const Section = styled.div`
	background-color: ${(props) => props.backgroundColor || '#fff'};
	height: 100vh;
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'column'};
	padding: ${(props) => props.padding || '0 6rem'};
`
export const SideSection = styled.div`
	background-color: ${(props) => props.backgroundColor || '#fff'};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0 6rem;
	border-right: 8px solid #f5f5f5;
`
export const HeaderContainer = styled.header`
	margin-top: 6rem;
`

export const FormContent = styled.div`
	display: block;
	background-color: ${(props) => props.backgroundColor || '#fff'};
	position: absolute;
	width: 80%;
	bottom: 6rem;

	& .MuiFormControl-root.MuiTextField-root {
		width: 100%;
	}
	& .MuiInputBase-root.MuiInput-root {
		color: #ffffff;
		font-size: 2.5rem;
	}
	& .MuiFormHelperText-root {
		font-weight: 700;
	}
`
export const Btn = styled.div`
	padding: 2rem 0;
`
export const Title = styled.h2`
	font-size: 2.5rem;
	font-weight: 700;
	font-family: 'Montserrat', sans-serif;
	text-align: left;
	width: 40%;
`
export const HelperText = styled.p`
	font-family: 'Montserrat', sans-serif;
	text-align: left;
	& a {
		color: #03a9f4;
	}
`
export const InputPasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
`
export const InputPassword = styled.div`
	border: 1px solid #f5f5f5;
	border-radius: 4px;
	width: 40px;
	height: 40px;
	text-align: center;
	line-height: 50px;
	color: #03a9f4;
`
export const ProfileImage = styled.div`
	& img {
		border: 1px solid #f5f5f5;
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
`
