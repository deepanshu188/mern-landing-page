import Button from '../UI/Button';
import HeaderContainer from './HeaderContainer';

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src="logo.svg" />
        <h1 className="brand-name">Digital agency</h1>
      </div>
      <div className="links-container">
        <a className="link">About</a>
        <a className="link">Services</a>
        <a className="link">Projects</a>
        <Button width="144px">Get in Touch</Button>
      </div>
    </HeaderContainer>
  );
};
