import { useMediaQuery } from '@mui/material';
import theme from '../theme';

const screenIsXSmall = useMediaQuery(theme.breakpoints.up('xs')); // 0px - 600px
const screenIsSmall = useMediaQuery(theme.breakpoints.up('sm')); // 600px - 900px
const screenIsMedium = useMediaQuery(theme.breakpoints.up('md')); // 900px - 1200px
const screenIsLarge = useMediaQuery(theme.breakpoints.up('lg')); // 1200px - 1536px

export default {
  xs: { screenIsXSmall, start: 0, end: 600 },
  sm: { screenIsSmall, start: 600, end: 900 },
  md: { screenIsMedium, start: 900, end: 1200 },
  lg: { screenIsLarge, start: 1200, end: 1536 },
};
