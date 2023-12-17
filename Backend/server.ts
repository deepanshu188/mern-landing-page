import express, { Request, Response } from 'express';
import cors from 'cors'
import posts from './posts';
import path from 'path';

const PORT = 3000;
const app = express();


app.use(cors())
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Root route is empty');
});

app.get('/posts', (req: Request, res: Response) => {
  res.status(200).send({ posts });
})

app.get('/post/:id', (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) res.status(400).send({ message: 'id field is required' })

  const postById = posts.find((item) => +id === +item.id)

  if (!postById) res.status(404).send({ message: 'post not found' })

  res.send(postById)
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
