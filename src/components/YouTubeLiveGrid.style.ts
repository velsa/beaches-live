import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    playlistContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
      gridGap: '15px',
    },
    '@media (max-width: 480px)': {
      playlistContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gridGap: '15px',
      },
    },
    loading: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 64px)',
      fontSize: '2rem',
    },
  },
  {}
);

export default useStyles;
