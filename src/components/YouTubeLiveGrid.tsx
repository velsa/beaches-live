import React, { useEffect, useState } from 'react';
import useStyles from './YouTubeLiveGrid.style';
import YouTubeCard from './YouTubeCard';
import { IYouTubeVideo, IYouTubeThumb } from './YouTubeTypes';

interface IYouTubeLiveGrid {
  playlistId: string;
}

const YouTubeLiveGrid: React.FC<IYouTubeLiveGrid> = ({ playlistId }) => {
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [reloadUseEffect, setReloadUseEffect] = useState(0);
  const [cardSize, setCardSize] = useState<'medium' | 'high'>('medium');
  const [playlist, setPlaylist] = useState<IYouTubeVideo[] | undefined>(
    undefined
  );
  const [loadedCards, setLoadedCards] = useState(0);
  const gapi = (window as any).gapi;
  const classes = useStyles();

  // Initialize card size accorind to media query
  useEffect(() => {
    updateCardSize();
  });

  // Load Google API client
  function loadClient() {
    gapi.client.setApiKey('AIzaSyDa_WqEf-WnqaO5EIZrDIdduA-0Lon8MRE');
    return gapi.client
      .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
      .then(
        function () {
          // console.log('GAPI client loaded for API');
          setLoadedAPI(true);
        },
        function (err: any) {
          console.error('Error loading GAPI client: ', err);
        }
      );
  }

  // Make sure the client is loaded and sign-in is complete before calling this method.
  function getPlaylist() {
    return gapi.client.youtube.playlistItems
      .list({
        part: 'snippet',
        maxResults: 50,
        playlistId: 'PL7mcY6hLwebKZ4r360nzVKitytMeIklT_',
      })
      .then(
        function (response: any) {
          // Handle the results here (response.result has the parsed body).
          // console.log('Response', response);
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
          // console.log('Videos', videos);
        },
        function (err: any) {
          console.error('getPlaylist error: ', err);
        }
      );
  }

  useEffect(() => {
    // Wait for Google API script to load
    if (!gapi.client) {
      setTimeout(() => {
        setReloadUseEffect(reloadUseEffect + 1);
      }, 100);
      return;
    }

    // Init Google API and get my playlist
    if (!loadedAPI) loadClient();
    else if (!playlist) getPlaylist();
  }, [reloadUseEffect, gapi, loadedAPI]);

  if (!playlist)
    return <div className={classes.loading}>Searching for live streams...</div>;

  // Watch for window size
  function updateCardSize() {
    setCardSize(
      window.matchMedia('(max-width: 480px)').matches ? 'medium' : 'high'
    );
  }
  window.matchMedia('(max-width: 480px)').addListener(updateCardSize);

  const onCardReady = (videoId: string) => {
    setLoadedCards(loadedCards + 1);
    console.log('loadedCards :>> ', loadedCards);
  };

  return (
    <div className={classes.playlistContainer}>
      {loadedCards < playlist.length && (
        <div className={classes.overlay}>
          <h1>Loading grid...</h1>{' '}
        </div>
      )}
      {playlist.map((video) => (
        <YouTubeCard
          key={video.id}
          video={video}
          size={cardSize}
          onReady={() => onCardReady(video.id)}
        />
      ))}
    </div>
  );
};

export default YouTubeLiveGrid;
