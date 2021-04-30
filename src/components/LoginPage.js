import Logo from '../assets/logo.png';

export default function LoginPage() {
  function submitHandler(e) {}

  return (
    <div className='w-2/3 mx-auto'>
      <img src={Logo} className='main-logo' />
      <div className='form-div '>
        <form className='form'>
          <div className='index-number flex flex-col'>
            <label>Index Number </label>
            <input type='text' className='index-number-input border' />
          </div>
          <div className='password flex flex-col'>
            <label>Password </label>
            <input type='password' className='password-input border' />
          </div>
          <button className='login-btn'>Log In</button>
        </form>
      </div>
    </div>
  );
}
