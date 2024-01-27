import Button from './Button';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';

const projectsList = [
  {
    title: 'Product Mail',
    desc: 'Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.',
    img: blog1,
  },
  {
    title: 'Product UI',
    desc: 'Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.',
    img: blog2,
  },
];

const Projects = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="p-4 md:p-12 bg-white bg-opacity-5 rounded-xl backdrop-blur-lg relative overflow-hidden z-10">
          <div className="absolute -top-[250px] -left-[250px] rounded-full w-[500px] h-[500px] bg-emerald-500 blur-[350px] opacity-50 -z-10" />
          <div className="absolute -bottom-[250px] -right-[250px] rounded-full w-[500px] h-[500px] bg-cyan-500 blur-[350px] opacity-50 -z-10" />
          <div className="flex flex-col gap-4 justify-center items-start max-w-[500px] mb-12">
            <h3 className="bg-gradient-to-b from-white to-[#898989] text-fill-with-gradient text-4xl md:text-5xl font-bold font-secondary">
              Our Projects
            </h3>
            <p className="opacity-75 text-lg font-light">
              Lorem ipsum dolor sit amet consectetur. Nulla quisque scelerisque
              eget quis. Eu amet amet eu interdum.
            </p>
            <div className="mt-6">
              <Button text="Browse All Projects" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 justify-center items-center">
            {projectsList.map((project, i) => {
              const { title, img, desc } = project;
              return (
                <div
                  className="flex flex-col gap-y-2 bg-[#060B27] border border-[#d6d6d61c] rounded-lg overflow-hidden p-4 md:p-6 xl:p-10 !pb-0"
                  key={i}
                >
                  <h6 className="text-2xl font-secondary">{title}</h6>
                  <p className="opacity-75 tracking-wide">{desc}</p>
                  <div className="flex justify-center w-full items-center mx-auto mt-4">
                    <img
                      src={img}
                      alt={title}
                      className="rounded-t-md w-[88%] min-h-[300px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
