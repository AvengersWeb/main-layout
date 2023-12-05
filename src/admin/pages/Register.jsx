import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Register = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userConPass, setUserConPass] = useState('');

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // AUTH RELATED STATE
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, createUser } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    if ((userPass || userConPass) && userPass !== userConPass) {
      setSuccess(false);
      setMessage('Password Did not match');
    } else {
      setSuccess(true);
      setMessage('');
    }
  }, [userPass, userConPass]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let errorMessage = '';

    if (!userEmail || !userPass || !userConPass) {
      errorMessage = 'Please Fill Up All The required Fields!';
      valid = false;
    } else if (userPass.length < 8) {
      errorMessage = 'Please Provide minimum 8 digit password';
      valid = false;
    } else if(!/[A-Z]/.test(userPass)) {
      errorMessage = 'Your password must have atleast 1 capital letter';
      valid = false;
    } else if (!/[!@#$%^&*()\-_=+\[\]{}|\\;:'"<>,.?/]/.test(userPass)){
      errorMessage = 'Your password must have atleast 1 special character.';
      valid = false;
    }   
    else if (userPass !== userConPass) {
      errorMessage = 'Password Did not match';
      valid = false;
    }

    if (valid) {
      createUser(userEmail, userPass)
      .then( async (result) => {
        console.log(result)
        const userData = {
          email: userEmail,
          role:'user'
        }
        setUser(result.user)
        const res = await axiosPublic.post('/api/v1/user', userData)
        if(res.data._id){
          console.log(res.data)
          navigate('/dashboard')
        }
      }) 
      .catch(error => {
        console.log(error.code)
        console.log('error message', error.message)
        setMessage(error.code)
      })
      setSuccess(true);
      setMessage('User Register Successfully! Wait For Confirmation');
      // use backend code here
    } else {
      setSuccess(false);
      setMessage(errorMessage);
    }
  };

  return (
    <div className="my-12">
      <div className="container mx-auto px-4">
        <div className="min-h-[80vh] flex justify-center items-center">
          <form
            className="font-secondary black-shadow p-6 md:p-10 rounded-lg max-w-[500px] w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center font-bold text-3xl mb-12">Register</h2>
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
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
              {/* confirm pass */}
              <div className="flex flex-col gap-y-3 w-full">
                <label htmlFor="con_pass" className="form-label !text-base">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  className="input-with-shadow"
                  name="from_con_pass"
                  value={userConPass}
                  onChange={(e) => setUserConPass(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded w-full my-6"
              type="submit"
            >
              Register
            </button>
            <Link
              to="/dashboard/login"
              className="font-bold hover:text-blue-600 duration-500 text-center"
            >
              Already Registered. Go to <span className='font-bold underline'>Login</span>
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

export default Register;
