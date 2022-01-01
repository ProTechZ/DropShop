import { makeStyles } from '@mui/styles'
import theme from '../theme';

const useGlobalStyles = makeStyles({
  horizontalCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  verticalCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  horizontalVerticalCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center'
  },
  secondaryBorder: {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
});

export default useGlobalStyles;
