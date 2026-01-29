import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import videoRoutes from './routes/video';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// 允许跨域（开发时必需）
app.use(cors());

// 静态资源：HLS 文件通过 /videos/ 访问
app.use('/videos', express.static(path.join(__dirname, '../public/videos')));

// JSON 解析
app.use(express.json());

// 视频路由
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`✅ 后端运行在 http://localhost: $ {PORT}`);
});