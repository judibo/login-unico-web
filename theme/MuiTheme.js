import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#d6ebee',
      main: '#3b68d9',
      dark: '#07ie55'
    }
  },
  overrides: {
    MuiCardActions: {
      root: {
        justifyContent: 'center'
      }
    }
  }
});

export default theme