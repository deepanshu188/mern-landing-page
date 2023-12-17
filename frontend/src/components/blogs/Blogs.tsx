import { useEffect, useState } from 'react';
import BlogsContainer from './BlogsContainer';
import { PostCard } from './PostCard';
import { blogPost } from '../../services/blogPost';
import Button from '../UI/Button';

export interface iPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Blogs = () => {
  const [posts, setPosts] = useState<iPost[]>([]);
  useEffect(() => {
    (async () => {
      const res = await blogPost();
      setPosts(res.posts);
    })();
  }, []);
  return (
    <BlogsContainer>
      <h1 className="heading">Our Blogs</h1>
      <div className="posts">
        {posts?.map((item: iPost) => {
          return <PostCard key={item.id} data={item} />;
        })}
      </div>
      <div className="button-container">
        <Button>View all posts</Button>
      </div>
    </BlogsContainer>
  );
};
