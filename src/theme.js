import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0046FD',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#99B5FE',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
  typography: {
    fontFamily: 'OneShinhanMedium, Arial',
  }
});

export default theme