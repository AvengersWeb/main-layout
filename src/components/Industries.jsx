/* eslint-disable no-unused-vars */
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';
import pattern from '../assets/pattern.png';
import line from '../assets/line.png';

let colours = 'bg-orange-600 bg-blue-600 bg-yellow-600';

const industryList = [
  {
    icon: icon7,
    title: 'Banking and Finance',
    desc: 'Take us wherever you go so that you know what’s going on with your money at all times.',
    link: '/#',
    bgColor: 'orange',
  },
  {
    icon: icon8,
    title: 'Retail and Distribution',
    desc: 'Take us wherever you go so that you know what’s going on with your money at all times.',
    link: '/#',
    bgColor: 'blue',
  },
  {
    icon: icon9,
    title: 'Media and Entertainment',
    desc: 'Take us wherever you go so that you know what’s going on with your money at all times.',
    link: '/#',
    bgColor: 'yellow',
  },
  {
    icon: icon8,
    title: 'Logistics and Transportation',
    desc: 'Take us wherever you go so that you know what’s going on with your money at all times.',
    link: '/#',
    bgColor: 'blue',
  },
  {
    icon: icon9,
    title: 'Software and Hi-Tech',
    desc: 'Take us wherever you go so that you know what’s going on with your money at all times.',
    link: '/#',
    bgColor: 'yellow',
  },
  {
    icon: icon7,
    title: 'Healthcare and Wellness',
    desc: 'Take us wherever you go so that you know what’s going on with your money at all times.',
    link: '/#',
    bgColor: 'orange',
  },
];

const Industries = () => {
  return (
    <section className="relative py-12 md:py-20 z-10">
      <img
        src={pattern}
        alt=""
        className="max-w-[200px] h-auto absolute top-[22%] left-[8%] -z-10"
      />
      <img
        src={pattern}
        alt=""
        className="max-w-[200px] h-auto absolute bottom-[2%] right-[8%] -z-10"
      />
      <img
        src={line}
        alt=""
        className="w-full h-auto absolute bottom-[2%] inset-0 -translate-y-1/2 top-1/2 -z-10"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 justify-center items-center text-center mb-12">
          <h3 className="bg-gradient-to-b from-white to-[#898989] text-fill-with-gradient text-4xl md:text-5xl font-bold font-secondary">
            Industries
          </h3>
          <p className="max-w-[700px] opacity-75 text-lg font-light">
            Graphs displaying your performance for metrics like follower
            evolution, average rate per post and reach and impressions to give
            you the insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {industryList.map((industry, i) => {
            const { icon, title, desc, bgColor } = industry;
            return (
              <div
                key={i}
                className="border border-[#d6d6d61c] rounded-md flex flex-col gap-y-4 p-4 md:p-6 bg-[#0E1330]"
              >
                <div
                  className={`w-20 h-20 rounded-xl bg-${bgColor}-600 bg-opacity-10 flex justify-center items-center`}
                >
                  <img src={icon} alt="" className="max-w-[36px] h-auto" />
                </div>
                <h5 className="text-2xl font-semibold ">{title}</h5>
                <p className="font-extralight tracking-wide opacity-60">
                  {desc}
                </p>
                <a href="" className="text-[#a5acff]">
                  {`Get Started >>`}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
