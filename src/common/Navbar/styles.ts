import { makeStyles } from '@mui/styles';
import Palette from '@/theme/utils/palette.util';

export default makeStyles({
  active: {
    textDecoration: 'none',
    '& button': {
      color: `${Palette.NAV_BUTTON_COLOR} !important`,
      background: `${Palette.NAV_BUTTON_BG}`
    }
  },
  noActive: {
    textDecoration: 'none',
    '& button': {
      background: 'none'
    }
  }
});
