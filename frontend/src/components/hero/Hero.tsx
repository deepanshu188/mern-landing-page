import image from '../../assets/img/hero/image.png';
import Button from '../UI/Button';
import HeroContainer from './HeroContainer';

export const Hero = () => {
  return (
    <HeroContainer>
      <div className="content">
        <h1 className="heading">
          Building Brands in the{' '}
          <span className="highlight">Digital Age</span>
        </h1>
        <p className="paragraph">
          Your partner in navigating the ever-evolving landscape of
          digital marketing. From conceptualization to execution, we
          craft tailored solutions that drive results and elevate your
          brand to new heights.
        </p>
        <Button>Learn More</Button>
      </div>
      <div>
        <img src={image} />
      </div>
    </HeroContainer>
  );
};
