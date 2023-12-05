import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const { setUser, signInUser, setLoadUserData } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    signInUser(userEmail, userPass)
    .then(async (response) => {
      const result = await axiosPublic.get(`/api/v1/user?email=${response.user.email}`)
      if (result.data){
        console.log(result.data)
        setLoadUserData(result.data)
        navigate('/dashboard')
      }else if (result.status === 404){
        console.log(result.message)
      }
      console.log(response.user.email)
    }) .catch (error => {
      console.log(error.code)
      console.log(error.message)
    })
    setSuccess(true);
    setMessage('Success');
  };

  return (
    <div className="my-12">
      <div className="container mx-auto px-4">
        <div className="min-h-[80vh] flex justify-center items-center">
          <form
            className="font-secondary black-shadow p-6 md:p-10 rounded-lg max-w-[500px] w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center font-bold text-3xl mb-12">Login</h2>
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* email */}
              <div className=" flex flex-col gap-y-3 w-full">
                <label htmlFor="email" className="form-label !text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="from_email"
                  className="input-with-shadow"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
              {/* pass */}
              <div className="flex flex-col gap-y-3 w-full">
                <label htmlFor="pass" className="form-label !text-base">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input-with-shadow"
                  name="from_pass"
                  value={userPass}
                  onChange={(e) => setUserPass(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded w-full my-6"
              type="submit"
            >
              Login
            </button>
            <Link
              to="/dashboard/register"
              className="font-bold hover:text-blue-600 duration-500"
            >
              Register
            </Link>
            {message !== '' && (
              <p
                className={`${
                  success ? 'text-emerald-400' : 'text-red-400'
                } font-bold font-secondary mt-3`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
