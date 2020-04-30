import React, { useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import useStyles from './YouTubeFS.style';

interface IWindowSize {
  width: number;
  height: number;
}

const YouTubeFS = () => {
  const classes = useStyles();
  const [size, setSize] = useState<IWindowSize | undefined>(undefined);

  const opts: Options = {
    height: 'auto',
    width: 'auto',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      fs: 0,
    },
  };

  const onReady = (event: any) => {
    // setVideoEmbed(event.target);
  };

  return (
    <div className={classes.container}>
      <YouTube videoId='1FvwPEKgcsA' opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeFS;
