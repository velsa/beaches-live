import React, { useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import useStyles from './YouTubeCard.style';
import { IYouTubeVideo, IYouTubeThumb } from './YouTubeTypes';

interface IYouTubeCard {
  video: IYouTubeVideo;
  size?: 'medium' | 'standard' | 'high';
}

const YouTubeCard: React.FC<IYouTubeCard> = ({ video, size = 'high' }) => {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEmbed, setVideoEmbed] = useState<any>(undefined);

  const opts: Options = {
    height: video.thumbnails[size].height.toString(),
    width: video.thumbnails[size].width.toString(),
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      fs: 1,
      // playsinline: 1,
    },
  };

  const handleMouseOver = (ev: any) => {
    videoEmbed.playVideo();
    setIsPlaying(true);
    console.log(`PLAYING ${video.id}`);
  };

  const handleMouseOut = (ev: any) => {
    videoEmbed.pauseVideo();
    setIsPlaying(false);
    console.log(`NOT PLAYING ${video.id}`);
  };

  const onReady = (event: any) => {
    console.log(`onReady :>> ${video.id}`);
    setVideoEmbed(event.target);
  };

  return (
    <div className={classes.videoCard} key={video.id}>
      {videoEmbed === undefined && <div>loading...</div>}
      {!isPlaying && videoEmbed && (
        <img
          className={classes.videoThumb}
          src={video.thumbnails[size].url}
          alt={video.title}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      )}
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <YouTube videoId={video.id} opts={opts} onReady={onReady} />
      </div>
      <span className={classes.videoCardTitle}>{video.title}</span>
    </div>
  );
};

export default YouTubeCard;
