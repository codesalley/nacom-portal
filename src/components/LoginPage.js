import Logo from '../assets/logo.png';
import { useRef, useState } from 'react';
import { login } from '../utils/login';
import auth from '../utils/auth';

export default function LoginPage() {
  const indext_number = useRef();
  const password = useRef();
  const [errorVal, seterrorVal] = useState();
  const [submit, setSubmit] = useState(false);
  const [studentData, setStudentData] = useState();
  const [announcement, setAnnouncement] = useState();

  async function submitHandler(e) {
    e.preventDefault();
    setSubmit(true);
    const student_index = indext_number.current.value;
    const student_password = password.current.value;
    if (student_index && student_password) {
      const res = await login(student_index, student_password);
      console.log(res);
      if (res === false) {
        seterrorVal('invalid credentails');
        setSubmit(false);
        return;
      }
      const profiledata = await auth('https://nacomtest.herokuapp.com/me');
      const annnouncement = await auth('https://nacomtest.herokuapp.com/me');
    }
    setSubmit(false);
  }

  return (
    <div className='w-2/3 mx-auto'>
      <img src={Logo} alt='main-logo' className='main-logo' />

      <div className='form-div '>
        <p className='form-error'> {errorVal} </p>
        <form className='form' onSubmit={submitHandler}>
          <div className='index-number flex flex-col'>
            <label>Index Number </label>

            <input
              type='text'
              className='index-number-input border'
              ref={indext_number}
            />
          </div>
          <div className='password flex flex-col'>
            <label>Password </label>
            <input
              type='password'
              className='password-input border'
              ref={password}
            />
          </div>
          <button className='login-btn' disabled={submit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
