import { useParams } from 'react-router-dom';
import { PostView } from '../components/blogs/PostView';
import { useEffect, useState } from 'react';
import { fetchPostWithId } from '../services/blogPost';
import { iPost } from '../components/blogs/Blogs';

export const PostDetail: React.FC = () => {
  const [post, setPost] = useState<iPost>();
  const { id } = useParams();
  scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      const res = await fetchPostWithId(id);
      setPost(res);
    })();
  }, []);

  return <PostView data={post} />;
};
