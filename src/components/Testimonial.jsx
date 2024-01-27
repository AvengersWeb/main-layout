import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import quote from '../assets/quote.png';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonialList = [
  {
    img: client1,
    name: 'Cameron Williamson',
    designation: 'Web Designer',
    comment:
      'Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed lectus. ',
  },
  {
    img: client2,
    name: 'Esther Howard',
    designation: 'UI/UX Designer',
    comment:
      'At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus',
  },
  {
    img: client3,
    name: 'Jenny Wilson',
    designation: 'Web Developer',
    comment:
      'Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.',
  },
  {
    img: client1,
    name: 'Cameron Williamson',
    designation: 'Web Designer',
    comment:
      'Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed lectus. ',
  },
  {
    img: client2,
    name: 'Esther Howard',
    designation: 'UI/UX Designer',
    comment:
      'At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus',
  },
  {
    img: client3,
    name: 'Jenny Wilson',
    designation: 'Web Developer',
    comment:
      'Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.',
  },
];

const Testimonial = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center text-center mb-12">
          <h3 className="bg-gradient-to-b from-white to-[#898989] text-fill-with-gradient text-4xl md:text-5xl font-bold font-secondary">
            What our clients say
          </h3>
          <p className="max-w-[700px] opacity-75 text-lg font-light">
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </p>
        </div>
        <Swiper
          grabCursor={true}
          centeredSlides={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1068: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper !overflow-y-visible py-12"
        >
          {testimonialList.map((item, i) => {
            const { img, name, designation, comment } = item;
            return (
              <SwiperSlide key={i} className="h-full">
                <div className="relative h-full">
                  <div className="relative w-[90%] mx-auto bg-[#0E1330] rounded-md border border-[#d6d6d61c] p-4 md:p-8 xl:p-12 z-10 h-full">
                    <img
                      src={quote}
                      alt=""
                      className="absolute top-6 right-6 -z-10"
                    />

                    <div className="flex gap-x-4">
                      <img
                        src={img}
                        alt={name}
                        className="w-11 h-11 rounded-md"
                      />
                      <div>
                        <h6 className="text-xl font-secondary mb-1">{name}</h6>
                        <p className="text-sm opacity-75">{designation}</p>
                      </div>
                    </div>
                    <p className="text-lg font-light tracking-wide mt-6">
                      {comment}
                    </p>
                  </div>
                  <div className="absolute w-full -bottom-12 h-40 rounded-xl opacity-60 bg-gradient-to-r from-cyan-400 to-purple-400 bg-blur-md" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
