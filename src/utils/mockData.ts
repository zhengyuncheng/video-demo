export interface Video {
  id: string;
  title: string;
  poster: string;
  duration: number;
  hlsUrl: string;
  author: string;
  views: string;
  comments: unknown[];
}

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Big Buck Bunny - 1080p 动画短片',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Big_Buck_Bunny_poster.jpg/800px-Big_Buck_Bunny_poster.jpg',
    duration: 596,
    hlsUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    author: 'Blender Foundation',
    views: '2.4万',
    comments: []
  },
  {
    id: '2',
    title: 'Tears of Steel - 科幻短片',
    poster: 'https://mango.blender.org/wp-content/gallery/teaser-poster/teaser-poster-full.jpg',
    duration: 720,
    hlsUrl: 'https://streaming.videodelivery.net/9d33e77a9f5b9c8d3e1f0a2b4c6d8e0f/manifest.m3u8',
    author: 'Mango Project',
    views: '1.8万',
    comments: []
  }
];
