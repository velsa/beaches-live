import React, { useState, useEffect, useRef } from 'react';
import YouTube, { Options } from 'react-youtube';
import useStyles from './YouTubeFS.style';
interface IWindowSize {
  width: number;
  height: number;
}

const defaultOpts: Options = {
  height: window.innerHeight - 3 + '',
  width: window.innerWidth + '',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    modestbranding: 1,
    fs: 0,
  },
};

const YouTubeFS = () => {
  const classes = useStyles();
  const containerRef = useRef(null);
  const [opts, setOpts] = useState(defaultOpts);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setOpts({
      height: window.innerHeight - 3 + '',
      width: window.innerWidth + '',
      ...defaultOpts,
    });
    // console.log('containerRef :>> ', containerRef.current);
  };

  const onReady = (event: any) => {
    // setVideoEmbed(event.target);
    event.target.playVideo();
  };

  return (
    <div
      // style={{ width: opts.width, height: opts.height }}
      ref={containerRef}
      className={classes.container}
    >
      <h1>Hello</h1>
      <YouTube
        videoId='1FvwPEKgcsA'
        opts={
          opts
        } /* default -> {}  | https://developers.google.com/youtube/player_parameters*/
        onReady={
          onReady
        } /* default -> null | returns event with player object */
      />
    </div>
  );
};

export default YouTubeFS;
