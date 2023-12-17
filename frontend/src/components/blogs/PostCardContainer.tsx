import styled from 'styled-components';

const PostCardContainer = styled.section`
  width: 400px;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
  }
  .content {
    background-color: #fff;
    position: absolute;
    padding: 1.5rem;
    width: 90%;
    right: 0;
    bottom: -180px;
    .title {
      color: #0f0049;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .description {
      margin: 1rem 0;
      color: #8681a4;
      word-break: break-all;
    }
    .icon {
      float: right;
    }
  }
`;

export default PostCardContainer;
