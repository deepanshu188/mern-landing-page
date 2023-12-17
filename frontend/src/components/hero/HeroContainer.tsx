import styled from 'styled-components';

const HeroContainer = styled.section`
  padding: 6rem 2rem;
  display: flex;
  justify-content: space-between;

  .content {
    width: 500px;
    gap: 16px;
    display: flex;
    flex-direction: column;
  }

  .heading {
    font-size: 60px;
    color: #2d3748;
    font-weight: 700;

    .highlight {
      color: #6153cd;
    }
  }

  .paragraph {
    color: #47536b;
    line-height: 28px;
    font-size: 18px;
    margin: 8px 0;
  }
`;

export default HeroContainer;
