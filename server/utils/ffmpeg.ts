import * as ffmpeg from 'fluent-ffmpeg';
import path from 'path';

export function transcodeToHLS(inputPath: string, outputDir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // 确保输出目录存在（可用 fs.mkdirSync）

    const posterPath = path.join(outputDir, 'poster.jpg');

    ffmpeg(inputPath)
      .addOption('-vf', 'scale=-2:720') // 720p
      .addOption('-c:v', 'libx264')
      .addOption('-hls_time', '4')
      .addOption('-hls_playlist_type', 'vod')
      .output(path.join(outputDir, '720p.m3u8'))

      .addOption('-vf', 'scale=-2:360') // 360p
      .addOption('-c:v', 'libx264')
      .addOption('-hls_time', '4')
      .addOption('-hls_playlist_type', 'vod')
      .output(path.join(outputDir, '360p.m3u8'))

      // 生成封面图
      .on('end', () => {
        ffmpeg(inputPath)
          .screenshots({
            timestamps: ['00:00:05'],
            filename: 'poster.jpg',
            folder: outputDir,
            size: '640x360'
          })
          .on('end', resolve)
          .on('error', reject);
      })
      .on('error', reject)
      .run();
  });
}