import styled from 'styled-components'

export const FormContent = styled.div`
	display: block;
	background-color: ${(props) => props.backgroundColor || '#fff'};

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
