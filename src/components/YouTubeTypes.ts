export interface IYouTubeThumb {
  url: string;
  width: number;
  height: number;
}

export interface IYouTubeVideo {
  title: string;
  id: string;
  thumbnails: {
    default: IYouTubeThumb;
    high: IYouTubeThumb;
    maxres: IYouTubeThumb;
    medium: IYouTubeThumb;
    standard: IYouTubeThumb;
  };
  publishedAt: string;
}
