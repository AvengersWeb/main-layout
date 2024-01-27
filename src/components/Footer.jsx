import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="pt-12 bg-[#161C28]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <div className="text-center flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <h6 className="text-xl font-secondary mb-3">Support</h6>
            <ul className="flex flex-col gap-y-1.5 opacity-75">
              <li>Help Centre</li>
              <li>Account Infromation</li>
            </ul>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <h6 className="text-xl font-secondary mb-3">Help and Solution</h6>
            <ul className="flex flex-col gap-y-1.5 opacity-75">
              <li>Talk to support</li>
              <li>Support docs</li>
            </ul>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <h6 className="text-xl font-secondary mb-3">Product</h6>
            <ul className="flex flex-col gap-y-1.5 opacity-75">
              <li>Update</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#d6d6d61c] my-12" />
        <p className="text-center  pb-12">
          Copyright @shafayet 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
