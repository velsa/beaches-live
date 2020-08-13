import React, { useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import useStyles from './YouTubeCard.style';
import { IYouTubeVideo, IYouTubeThumb } from './YouTubeTypes';

interface IYouTubeCard {
  video: IYouTubeVideo;
  size?: 'medium' | 'standard' | 'high';
  onReady?: () => void;
}

const YouTubeCard: React.FC<IYouTubeCard> = ({
  video,
  size = 'medium',
  ...props
}) => {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEmbed, setVideoEmbed] = useState<any>(undefined);
  
  const videoHeight = videoEmbed && video.thumbnails[size] ? video.thumbnails[size].height.toString() : "100" : '0';
  const videoWidth = video.thumbnails[size] ? video.thumbnails[size].width.toString() : "200";
  const opts: Options = {
    height: videoHeight,
    width: videoWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      fs: 1,
    },
  };

  const handleMouseOver = (ev: any) => {
    if (videoEmbed) {
      videoEmbed.playVideo();
      setIsPlaying(true);
    }
  };

  const handleMouseOut = (ev: any) => {
    if (videoEmbed) {
      videoEmbed.pauseVideo();
      setIsPlaying(false);
    }
  };

  const onReady = (event: any) => {
    setVideoEmbed(event.target);
    props.onReady && props.onReady();
  };

  return (
    <div className={classes.videoCard} key={video.id}>
      {!videoEmbed && (
        <div
          className={classes.loading}
          style={{ height: videoHeight }}
        >
          Loading live stream...
        </div>
      )}
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
