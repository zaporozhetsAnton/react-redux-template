import { createUseStyles } from 'react-jss';

import { Theme } from '@/styles/theme';

export const useStyles = createUseStyles((theme: Theme) => ({
  image: {
    width: 100,
    height: 100,
  },
  blueText: {
    color: theme.primary,
    fontFamily: theme.poppinsFontFamily,
  },
  pinkText: {
    color: 'pink',
  },
}));
