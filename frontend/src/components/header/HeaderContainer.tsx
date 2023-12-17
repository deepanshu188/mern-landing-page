import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    display: flex;
    gap: 6px;

    .brand-name {
      font-size: 24px;
    }
  }

  .links-container {
    display: flex;
    gap: 18px;
    align-items: center;

    .link {
      color: #2d3748;
      margin: 0 12px;
    }
  }
`;

export default HeaderContainer;
