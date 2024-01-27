import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';

const serviceList = [
  {
    icon: icon1,
    title: 'Custom Software Development',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
  },
  {
    icon: icon2,
    title: 'Technology Advisory',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
  },
  {
    icon: icon3,
    title: 'Technology Consulting',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
  },
  {
    icon: icon4,
    title: 'Digital Transformation',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
  },
  {
    icon: icon5,
    title: 'Managed IT Services',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
  },
  {
    icon: icon6,
    title: 'Modernization',
    desc: 'Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.',
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center md:items-start text-center md:text-start mb-12">
          <h3 className="bg-gradient-to-b from-white to-[#898989] text-fill-with-gradient text-4xl md:text-5xl font-bold font-secondary">
            Our Services
          </h3>
          <p className="max-w-[400px] opacity-75 text-lg font-light">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {serviceList.map((service, i) => {
            const { icon, title, desc } = service;
            return (
              <div
                key={i}
                className="border border-[#d6d6d61c] rounded-md flex flex-col gap-y-4 p-4 md:p-6 bg-[#0E1330]"
              >
                <img src={icon} alt="" className="max-w-[45px] h-auto" />
                <h5 className="text-2xl font-semibold mb-2">{title}</h5>
                <p className="font-extralight tracking-wide opacity-60">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
