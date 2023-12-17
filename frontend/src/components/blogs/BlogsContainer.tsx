import styled from 'styled-components';

const BlogsContainer = styled.section`
  margin: 5rem 0;
  .heading {
    color: #0f0049;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .posts {
    display: flex;
    gap: 20px;
    margin-top: 2rem;
    margin-bottom: 200px;
    justify-content: space-between;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
`;

export default BlogsContainer;
