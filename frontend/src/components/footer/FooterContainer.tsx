import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  height: 394px;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .sub-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .block {
      max-width: 396px;
      .heading {
        font-weight: 700;
        margin-bottom: 1.8rem;
      }
      .paragraph {
        line-height: 1.38rem;
        font-size: 0.88rem;
        margin-bottom: 2.2rem;
      }
      .social {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      .links {
        list-style-type: none;
        li {
          margin: 1rem 0;
        }
      }
    }
  }
`;

export default FooterContainer;
