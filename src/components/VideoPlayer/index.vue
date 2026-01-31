<template>
  <div class="video-player-container">
    <video
      ref="videoElement"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
      preload="auto"
    ></video>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watch } from "vue";
  import videojs from "video.js";
  import "video.js/dist/video-js.css";

  // 定义 props
  interface Props {
    src: string;
    poster?: string;
  }
  const props = defineProps<Props>();

  // DOM 引用
  const videoElement = ref<HTMLVideoElement | null>(null);
  let player: any = null;

  // 初始化播放器
  const initPlayer = () => {
    if (!videoElement.value) return;

    try {
      const options = {
        controls: true,
        responsive: true,
        fluid: true,
        poster: props.poster,
        sources: [
          {
            src: props.src,
            type: "application/x-mpegURL",
          },
        ],
        html5: {
          hls: {
            overrideNative: true,
          },
        },
      };

      // 使用回调形式初始化播放器
      videojs(videoElement.value, options, function () {
        player = this;
        console.log("Video.js player initialized successfully");
      });
    } catch (error) {
      console.error("Error initializing Video.js player:", error);
    }
  };

  // 销毁播放器
  const disposePlayer = () => {
    if (player) {
      try {
        player.dispose();
        player = null;
        console.log("Video.js player disposed");
      } catch (error) {
        console.error("Error disposing Video.js player:", error);
      }
    }
  };

  // 生命周期钩子
  onMounted(() => {
    // 延迟初始化播放器，确保 DOM 元素完全加载
    setTimeout(() => {
      initPlayer();
    }, 100);
  });

  onUnmounted(() => {
    disposePlayer();
  });

  // 监听 src 变化
  watch(
    () => props.src,
    () => {
      disposePlayer();
      setTimeout(() => {
        initPlayer();
      }, 100);
    },
  );
</script>

<style scoped lang="scss">
  .video-player-container {
    width: 100%;
    aspect-ratio: 16 / 9; /* 保持宽高比 */
    overflow: hidden;
    :deep(.video-js) {
      .vjs-poster {
        background-size: cover;
      }
    }
  }
</style>
