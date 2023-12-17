import { Hero } from '../components/hero/Hero';
import { Brands } from '../components/brands/Brands';
import { Services } from '../components/services/Services';
import { Blogs } from '../components/blogs/Blogs';
import { Testimonials } from '../components/testimonials/Testimonials';

export const Home: React.FC = () => {
  return (
    <section>
      <Hero />
      <Brands />
      <Services />
      <Testimonials />
      <Blogs />
    </section>
  );
};
