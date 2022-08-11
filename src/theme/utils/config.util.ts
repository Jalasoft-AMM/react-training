import { createTheme } from '@mui/material';
import Palette from './palette.util';

export default createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: Palette.BG
    }
  },
  typography: {
    fontFamily: Palette.FONT
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          borderRadius: '0.5rem',
          color: 'white'
        }
      }
    },
    MuiCard: {
      defaultProps: {
        style: {
          background: 'none',
          boxShadow: 'none'
        }
      }
    }
  }
});
