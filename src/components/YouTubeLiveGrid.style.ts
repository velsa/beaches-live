import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    playlistContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
      gridGap: '2px',
      backgroundColor: 'black',
      color: 'white',
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
    overlay: {
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0',
      bottom: '0',
      zIndex: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'rgb(0,0,0,0.5)',
    },
  },
  {}
);

export default useStyles;
