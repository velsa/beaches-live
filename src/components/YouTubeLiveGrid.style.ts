import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  playlistContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
    gridGap: '15px',
  },
});

export default useStyles;
