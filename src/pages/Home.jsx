import Clients from '../components/Clients';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <Services />
      <Projects />
      <Industries />
      <Clients />
      <Testimonial />
    </div>
  );
};

export default Home;
