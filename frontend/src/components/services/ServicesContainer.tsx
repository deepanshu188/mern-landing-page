import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 6rem 0;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .heading {
      color: #0f0049;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 3.8rem;
    }
    .paragraph {
      font-size: 1.13rem;
      color: #47536b;
      line-height: 1.75rem;
    }
  }

  .cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .card {
      width: 250px;
      .heading {
        margin: 1rem 0;
        color: #0f0049;
        font-size: 1.25rem;
        font-weight: 500;
      }
      .paragraph {
        font-size: 1rem;
        line-height: 1.3rem;
        color: #857fa3;
      }
    }
  }
`;

export default ServicesContainer;
