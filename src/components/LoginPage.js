import Logo from '../assets/logo.png';
import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import './LonginPage.css';
import nurseimg from '../assets/nurse.png';

export default function LoginPage() {
  const indext_number = useRef();
  const password = useRef();
  const [errorVal, seterrorVal] = useState();
  const [submit, setSubmit] = useState(false);
  const [loader, setLoader] = useState(false);
  const { signIn } = useAuthContext();
  const histroy = useHistory();

  useEffect(() => {
    return () => seterrorVal();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    setLoader(true);
    setSubmit(true);
    const student_index = indext_number.current.value;
    const student_password = password.current.value;
    if (student_index && student_password) {
      const res = await signIn(student_index, student_password);
      if (res === false) {
        seterrorVal('Invalid Credentails');
        setSubmit(false);
        setLoader(false);
        return;
      }
      histroy.push('/');
    }
    setLoader(false);
    setSubmit(false);
  }

  return (
    <>
      {loader ? (
        <div className='loader'>
          <div className='loader-circle'></div>
        </div>
      ) : null}
      <div className='main-page bg-gray-600 lg:flex overflow-scroll'>
        <div className='hidden lg:block w-2/4 h-screen lg:rounded-lg p-2 nurse-right'>
          <img
            src={nurseimg}
            alt='left'
            className='object-cover h-full rounded-lg'
          />
        </div>
        <div className='w-2/3 mx-auto h-screen flex flex-col gap-2 pt-10 lg:w-2/4 lg:py-40'>
          <img src={Logo} alt='main-logo' className='main-logo  mx-auto' />

          <div className='form-div lg:w-2/4 lg:mx-auto'>
            <p className='form-error text-center text-red-200 border-gray-100 p-2 rounded transform transition-all duration-700'>
              {' '}
              {errorVal}{' '}
            </p>
            <form className='form flex flex-col gap-4' onSubmit={submitHandler}>
              <div className='index-number flex flex-col'>
                <label className='text-xl text-green-50 font-bold '>
                  Index Number{' '}
                </label>

                <input
                  type='text'
                  className='index-number-input border rounded p-2 focus:ring ring-green-600  focus:outline-none transition-color duration-200'
                  ref={indext_number}
                  placeholder='Index Number eg: A323F'
                />
              </div>
              <div className='password flex flex-col'>
                <label className='text-xl text-green-50 font-bold'>
                  Password{' '}
                </label>
                <input
                  type='password'
                  className='password-input border rounded p-2 focus:ring ring-green-600  focus:outline-none transition-color duration-200 '
                  ref={password}
                />
              </div>
              <button
                className='login-btn bg-green-600 w-full p-2 rounded text-green-50 font-bold'
                disabled={submit}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
