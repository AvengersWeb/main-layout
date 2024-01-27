import logo from '../assets/logo.png';
import Button from './Button';

const navItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Portfolio',
    link: '/',
  },
  {
    text: 'Services',
    link: '/',
  },
  {
    text: 'Products',
    link: '/',
  },
  {
    text: 'Company',
    link: '/',
  },
  {
    text: 'Blog',
    link: '/',
  },
];

const Navbar = () => {
  return (
    <div className="font-primary py-2 border-b border-[#d6d6d61c]">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <img src={logo} alt="" className="max-w-full h-auto" />
          </div>

          <ul className="flex items-center gap-x-6 text-lg">
            {navItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    i === 0 ? 'opacity-100' : 'opacity-50'
                  } relative overflow-hidden`}
                >
                  {i === 0 && (
                    <span className="absolute w-[110%] h-1 bg-teal-400 top-1/2  -translate-y-1/2 -z-10 opacity-90 rounded-md nav-animation"></span>
                  )}
                  {item.text}
                </li>
              );
            })}
          </ul>

          <div>
            <Button text={`Contact`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
