import BrandContainer from './BrandsContainer';
import click_up from '../../assets/img/brands/click_up.svg';
import dropbox from '../../assets/img/brands/dropbox.svg';
import segment from '../../assets/img/brands/segment.svg';
import github from '../../assets/img/brands/github.svg';
import intuit from '../../assets/img/brands/intuit.svg';

export const Brands = () => {
  return (
    <BrandContainer>
      <p className="text">Powering next-gen companies</p>
      <div className="logos">
        <img src={click_up} />
        <img src={dropbox} />
        <img src={segment} />
        <img src={github} />
        <img src={intuit} />
      </div>
    </BrandContainer>
  );
};
