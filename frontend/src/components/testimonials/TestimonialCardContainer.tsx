import styled from 'styled-components';

const TestimonialCardContainer = styled.div`
  display: flex;
  gap: 80px;
  .img-container {
    display: flex;
    position: relative;
    .quote-icon {
      position: absolute;
      top: -30px;
      left: -40px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .arrows {
      display: flex;
      align-self: flex-end;
      gap: 20px;
    }
    .content {
      color: #47536b;
      font-weight: 500;
      .thought {
        font-size: 1.5rem;
        margin-bottom: 2.6rem;
      }
      .author {
        font-size: 1.25rem;
      }
    }
  }
`;

export default TestimonialCardContainer;
