import picture from '../../assets/img/testimonials/picture.png';
import TestimonialCardContainer from './TestimonialCardContainer';

export const TestimonailCard = () => {
  return (
    <TestimonialCardContainer>
      <div className="img-container">
        <svg
          className="quote-icon"
          width="27"
          height="22"
          viewBox="0 0 27 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4 21.8V15C15.4 11.1067 16.3067 7.90667 18.12 5.4C19.9867 2.84 22.68 1.18666 26.2 0.439998V4.84C24.4933 5.26667 23.16 6.06667 22.2 7.24C21.24 8.36 20.6533 9.74667 20.44 11.4H24.6V21.8H15.4ZM0.600001 21.8V15C0.600001 11.1067 1.50667 7.90667 3.32 5.4C5.18667 2.84 7.88 1.18666 11.4 0.439998V4.84C9.69333 5.26667 8.36 6.06667 7.4 7.24C6.44 8.36 5.85333 9.74667 5.64 11.4H9.8V21.8H0.600001Z"
            fill="black"
          />
        </svg>
        <img src={picture} />
      </div>
      <div className="right">
        <div className="content">
          <p className="thought">
            “The results have been incredible. With Power Digital, it
            feels like they’re in our trench, supporting and
            understanding us. They’re like a partner and mentor in
            helping us get where we want to be.”
          </p>
          <p className="author">
            <b className="name">David Calathan -</b> Director of
            Design Operations, New York
          </p>
        </div>
        <div className="arrows">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 11H1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 21L1 11L11 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11H21"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 21L21 11L11 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </TestimonialCardContainer>
  );
};
