import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from './Arrow';
import { iPost } from './Blogs';
import PostCardContainer from './PostCardContainer';

export const PostCard = ({ data }: { data: iPost }) => {
  const navigate = useNavigate();
  return (
    <PostCardContainer onClick={() => navigate(`post/${data?.id}`)}>
      <img src={import.meta.env.VITE_BASE_URL + data?.image} />
      <div className="content">
        <p className="title">{data?.title}</p>
        <p className="description">{data?.description}</p>
        <span className="icon">
          <ArrowIcon />
        </span>
      </div>
    </PostCardContainer>
  );
};
