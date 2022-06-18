import styled from 'styled-components'

export const HeaderContainer = styled.header`
	margin-top: 6rem;
`
export const SideSection = styled.div`
	background-color: ${(props) => props.backgroundColor || '#fff'};
	height: 100vh;
	width: 20%;
	display: flex;
	flex-direction: column;
	border-right: 8px solid #f5f5f5;
	font-weight: 700;
	font-family: 'CircularAirPro-Bold', Arial, Helvetica, sans-serif;
`
export const SideBanner = styled.div`
	border-top: 8px solid #f5f5f5;
	text-align: center;
	margin-top: 15rem;
	padding: 20px 50px;
	& img {
		width: 150px;
    height: 150px;
	}
`
export const ProfileImage = styled.div`
	& img {
		border: 1px solid #f5f5f5;
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
`