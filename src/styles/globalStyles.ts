import normalize from 'normalize-jss';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@global': {
    ...normalize,
    '*': {
      fontFamily: 'Open Sans, sans-serif',
    },
  },
});
