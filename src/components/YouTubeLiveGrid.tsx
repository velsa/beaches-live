import React, { useEffect, useState } from 'react';
import useStyles from './YouTubeLiveGrid.style';
import YouTubeCard from './YouTubeCard';
import { IYouTubeVideo, IYouTubeThumb } from './YouTubeTypes';

interface IYouTubeLiveGrid {
  playlistId: string;
}

const YouTubeLiveGrid: React.FC<IYouTubeLiveGrid> = ({ playlistId }) => {
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [playlist, setPlaylist] = useState<IYouTubeVideo[] | undefined>(
    undefined
  );
  const gapi = (window as any).gapi;
  const classes = useStyles();

  function loadClient() {
    // const gapi = (window as any).gapi;
    console.log('gapi :>> ');
    gapi.client.setApiKey('AIzaSyDa_WqEf-WnqaO5EIZrDIdduA-0Lon8MRE');
    return gapi.client
      .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
      .then(
        function () {
          console.log('GAPI client loaded for API');
          setLoadedAPI(true);
        },
        function (err: any) {
          console.error('Error loading GAPI client for API', err);
        }
      );
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function getPlaylist() {
    // const gapi = (window as any).gapi;
    return gapi.client.youtube.playlistItems
      .list({
        part: 'snippet',
        maxResults: 50,
        playlistId: 'PL7mcY6hLwebKZ4r360nzVKitytMeIklT_',
      })
      .then(
        function (response: any) {
          // Handle the results here (response.result has the parsed body).
          console.log('Response', response);
          const videos: IYouTubeVideo[] = [];
          for (let item of response.result.items) {
            videos.push({
              id: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              thumbnails: item.snippet.thumbnails,
              publishedAt: item.snippet.publishedAt,
            });
          }
          setPlaylist(videos);
          console.log('Videos', videos);
        },
        function (err: any) {
          console.error('Execute error', err);
        }
      );
  }
  useEffect(() => {
    // Wait for script to load
    if (!gapi && !gapi.client) return;

    // Init Google API and get my playlist
    if (!loadedAPI) loadClient();
    else getPlaylist();
    return () => {
      // cleanup
    };
  }, [gapi, loadedAPI]);

  if (!playlist) return <div>loading...</div>;

  return (
    <div className={classes.playlistContainer}>
      {playlist.map((video) => (
        <YouTubeCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default YouTubeLiveGrid;
