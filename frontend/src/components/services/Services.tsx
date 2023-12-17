import Button from '../UI/Button';
import ServicesContainer from './ServicesContainer';
import app_development from '../../assets/img/services/app.svg';
import web_development from '../../assets/img/services/web.svg';
import graphic_designing from '../../assets/img/services/graphic.svg';
import digital_marketing from '../../assets/img/services/digital.svg';

export const Services = () => {
  return (
    <ServicesContainer>
      <div className="title">
        <h1 className="heading">Explore Our Services</h1>
        <p className="paragraph">
          We are self-service data analytics software that lets you
          create visually.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={app_development} />
          <p className="heading">App Development</p>
          <p className="paragraph">
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod metus vel sem bibendum, a bibendum justo tempor.
            Sed vel lectus
          </p>
        </div>
        <div className="card">
          <img src={web_development} />
          <p className="heading">Web Designing</p>
          <p className="paragraph">
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod metus vel sem bibendum, a bibendum justo tempor.
            Sed vel lectus
          </p>
        </div>
        <div className="card">
          <img src={graphic_designing} />
          <p className="heading">Graphic Designing</p>
          <p className="paragraph">
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod metus vel sem bibendum, a bibendum justo tempor.
            Sed vel lectus
          </p>
        </div>
        <div className="card">
          <img src={digital_marketing} />
          <p className="heading">Digital Marketing</p>
          <p className="paragraph">
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod metus vel sem bibendum, a bibendum justo tempor.
            Sed vel lectus
          </p>
        </div>
      </div>
      <Button>Learn More</Button>
    </ServicesContainer>
  );
};
