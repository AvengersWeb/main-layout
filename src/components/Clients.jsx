import client1 from '../assets/logo1.png';
import client2 from '../assets/logo2.png';
import client3 from '../assets/logo3.png';
import client4 from '../assets/logo4.png';
import client5 from '../assets/logo5.png';
import client6 from '../assets/logo6.png';

const clientList = [client1, client2, client3, client4, client5, client6];

const Clients = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h4 className="mb-12 text-2xl font-extralight text-center">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </h4>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 lg:gap-x-8 max-w-[900px] mx-auto items-center">
          {clientList.map((client, i) => (
            <img src={client} alt="" key={i} className="max-w-full h-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
