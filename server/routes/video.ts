import { Router } from 'express';
import multer from 'multer';
import { transcodeToHLS } from '../utils/ffmpeg';
import path from 'path';

const router = Router();

// 配置 multer 存储
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// 上传视频 → 转 HLS
router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: '未上传文件' });
    }

    const inputPath = req.file.path;
    const videoId = path.parse(req.file.filename).name;
    const outputDir = path.join(__dirname, '../../public/videos', videoId);

    // 调用 FFmpeg 转 HLS
    await transcodeToHLS(inputPath, outputDir);

    // 返回视频信息（前端用这个 ID 拼接播放地址）
    res.json({
      id: videoId,
      title: req.file.originalname,
      hlsUrl: `/videos/ $ {videoId}/master.m3u8`, // 前端直接请求这个路径
      poster: `/videos/ $ {videoId}/poster.jpg`
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '转码失败' });
  }
});

// 获取视频详情（可扩展：加评论、作者等）
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // 这里可以从数据库读取，Demo 用 mock
  res.json({
    id,
    title: '示例视频',
    author: 'Demo User',
    views: 1234,
    hlsUrl: `/videos/ $ {id}/master.m3u8`,
    poster: `/videos/ $ {id}/poster.jpg`
  });
});

export default router;