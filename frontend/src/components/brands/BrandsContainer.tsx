import styled from 'styled-components';

const BrandContainer = styled.section`
  display: flex;
  gap: 1.4rem;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;

  .text {
    font-size: 14px;
  }

  .logos {
    display: flex;
    gap: 4.5rem;
    align-items: center;
  }
`;

export default BrandContainer;
