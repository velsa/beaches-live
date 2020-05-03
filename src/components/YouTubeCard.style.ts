import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  videoCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // margin: '0.7rem',
  },
  loading: {
    // position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    width: '100%',
    background: 'rgb(200, 200, 200, 0.2)',
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
