import Button from './Button';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen py-12 md:py-20 lg:py-32">
      <div className="absolute top-1/2 -left-[500px] -translate-y-1/2 rounded-full w-[800px] h-[800px] bg-purple-600 blur-[300px] opacity-50" />
      <div className="absolute top-1/2 -right-[500px] -translate-y-1/2 rounded-full w-[800px] h-[800px] bg-teal-600 blur-[300px] opacity-50" />

      <div className="container mx-auto px-4">
        <div className="uppercase text-3xl md:text-6xl font-secondary text-center flex flex-col md:gap-y-3">
          <h1 className="bg-gradient-to-b from-[#F6F6F7] to-[#B8EBD2] text-fill-with-gradient">
            Arc light is a global technology
          </h1>
          <h1 className="bg-gradient-to-b from-[#F6F6F7] to-[#B8EBD2] text-fill-with-gradient">
            consultancy & software
          </h1>
          <h1 className="bg-gradient-to-b from-[#F6F6F7] to-[#B8EBD2] text-fill-with-gradient">
            engineering company.
          </h1>
        </div>
        <p className="max-w-[850px] mx-auto opacity-75 text-center text-xl my-5 font-light tracking-wide">
          Lorem ipsum dolor sit amet consectetur. Gravida convallis orci
          ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae
          orci ac penatibus consectetur.
        </p>
        <div className="text-center mt-12">
          <Button px="px-11" />
        </div>
        <div className="flex justify-center items-center mt-20">
          <img src={heroImage} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
