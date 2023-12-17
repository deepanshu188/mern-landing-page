import styled from 'styled-components';

const PostViewContainer = styled.section`
  min-height: 500px;
  .heading {
    color: #0f0049;
    font-size: 2rem;
    font-weight: 700;
  }
  .content {
    padding: 2rem 0;
    .img-container {
      display: flex;
      justify-content: center;
      position: relative;
      padding: 1rem;
      .bg {
        filter: blur(60px);
        opacity: 0.5;
        padding: 1rem;
        width: 100%;
        height: 400px;
      }
      .subject {
        position: absolute;
        height: 400px;
      }
    }
    .title {
      color: #0f0049;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .description {
      margin: 1rem 0;
    }
  }
`;

export default PostViewContainer;
