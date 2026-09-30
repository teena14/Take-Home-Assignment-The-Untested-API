import express from 'express';
import taskRoutes from './routes/tasks.js';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`Task API running on port ${PORT}`);
  });
}

export default app;
