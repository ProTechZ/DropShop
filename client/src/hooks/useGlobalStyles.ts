import { makeStyles } from '@mui/styles';

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
  noBorder: {
    border: 'none',
  },
});

export default useGlobalStyles;
