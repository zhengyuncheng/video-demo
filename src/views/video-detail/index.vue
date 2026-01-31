<template>
  <div>
    <!-- <h2>视频详情</h2> -->
    <VideoPlayer
      src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      :poster="poster"
    />
  </div>
</template>

<script setup lang="ts">
  import VideoPlayer from "@/components/VideoPlayer/index.vue";
  import poster from "@/assets/images/poster.png";
</script>

<style scoped></style>
