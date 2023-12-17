import { iPost } from './Blogs';
import PostViewContainer from './PostViewContainer';

export const PostView = ({ data }: { data: iPost | undefined }) => {
  const imgUrl = import.meta.env.VITE_BASE_URL + data?.image;
  return (
    <PostViewContainer>
      <p className="heading">Blog Post</p>
      <div className="content">
        <p className="title">{data?.title}</p>
        <div className="img-container">
          <img src={imgUrl} className="bg" />
          <img src={imgUrl} className="subject" />
        </div>
        <p className="description">{data?.description}</p>
      </div>
    </PostViewContainer>
  );
};
