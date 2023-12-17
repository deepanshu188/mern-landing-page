import styled from 'styled-components';

interface IPropsButton {
  width?: string;
}

const Button = styled.button<IPropsButton>`
  background-color: #6153cd;
  border-radius: 8px;
  height: 48px;
  width: ${(props) => props.width || '135px'};
  font-weight: 700;
  font-size: 16px;
  border: none;
  color: #fff;
`;

export default Button;
