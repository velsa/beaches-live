import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  videoCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0.7rem',
  },
  videoThumb: {
    position: 'absolute',
  },
  videoTransBox: {
    background: 'white',
  },
  videoCardTitle: {
    paddingTop: '0.5rem',
    width: '32ch',
  },
});

export default useStyles;
