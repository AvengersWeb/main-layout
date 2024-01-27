/* eslint-disable react/prop-types */
const Button = ({ text, px, width }) => {
  return (
    <button
      className={`py-4 ${px ? px : 'px-8'} ${
        width && width
      } bg-primary text-white font-semibold uppercase rounded-full leading-none`}
    >
      {text ? text : 'Explore'}
    </button>
  );
};

export default Button;
