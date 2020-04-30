import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    playlistContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
      gridGap: '15px',
    },
    '@media (max-width: 480px)': {
      playlistContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gridGap: '15px',
      },
    },
    loading: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '2rem',
      backgroundColor: '#282c34',
      color: 'white',
    },
  },
  {}
);

export default useStyles;
