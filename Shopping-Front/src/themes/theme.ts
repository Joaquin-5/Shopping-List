import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: '#FAFAFE'
    }
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
    button: {
      fontFamily: "'Quicksand', sans-serif",
      textTransform: 'capitalize',
      fontWeight: '500',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.05)',
          /* '& > span': {
            marginLeft: '2rem'
          }, */
          '&:hover': {backgroundColor: 'inherit', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.05)'}
        }
      }
    }
  }
});
