import VideoJsPlayer from "@/components/VideoJsPlayer/VideoJsPlayer";
import posterImage from "@/assets/images/poster1.png";
export default function PageDetail() {
  const videoOptions = {
    poster: posterImage,
    sources: [
      {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <VideoJsPlayer options={videoOptions}></VideoJsPlayer>
    </div>
  );
}
