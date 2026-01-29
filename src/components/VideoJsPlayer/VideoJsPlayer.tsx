import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styles from "./VideoJsPlayer.module.scss";
import "./components/CustomPlayButton/CustomPlayButton";
import "./CustomPlayButton.scss";

interface VideoJsPlayerProps {
  options?: any;
}

export default function VideoJsPlayer({ options = {} }: VideoJsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);
  useEffect(() => {
    if (!videoRef.current) return;
    console.log(videojs.getComponent("CustomPlayButton"));
    const customOptions = {
      controls: true,
      autoplay: false,
      preload: "auto",
      controlBar: {
        children: {
          playToggle: {
            component: "CustomPlayButton", // ← 现在有效！
          },
          // 其他控件保持默认（必须列出！）
          volumePanel: {},
          currentTimeDisplay: {},
          timeDivider: {},
          durationDisplay: {},
          progressControl: {},
          fullscreenToggle: {},
        },
      },
      ...options,
    };
    playerRef.current = videojs(videoRef.current, customOptions, () => {
      console.log("player ready");
    });
    console.log(playerRef.current.controlBar.playToggle.constructor.name);
    return () => {
      console.log("组件卸载完成");
      if (playerRef.current) {
        // playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div className={styles["video-container"]}>
      <video
        ref={videoRef}
        className={styles["video-js"] + " video-js vjs-big-play-centered"}
      />
    </div>
  );
}
