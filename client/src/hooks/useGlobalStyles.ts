import { makeStyles } from '@mui/styles';
import theme from '../theme';

const useGlobalStyles = makeStyles({
  horizontalCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  verticalCenter: {
    alignItems: 'center',
    display: 'flex',
  },
  horizontalVerticalCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backupHorizontalVerticalCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textCenter: {
    textAlign: 'center',
  },
  secondaryBorder: {
    border: `2px solid ${theme.palette.secondary.main}`,
  },

});

export default useGlobalStyles;
