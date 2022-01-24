import Input from "./Input";

const Login = () => {
  return (
    <div className='md:bg-register-login md:bg-no-repeat md:bg-cover bg-[#36393f] w-screen h-screen flex flex-col justify-center items-center relative'>
      <h2 className='text-3xl mb-20 md:absolute  md:top-2 md:left-2 flex items-center font-bold text-white'>
        <svg
          width='55'
          height='55'
          viewBox='0 0 45 55'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='55' height='55' fill='none' />
          <path
            d='M38.3333 19.5C38.3333 19.5 35.0849 16.9571 31.25 16.6667L30.9043 17.3587C34.3709 18.208 35.9618 19.4221 37.625 20.9167C34.7584 19.4533 31.93 18.0833 27 18.0833C22.07 18.0833 19.2416 19.4533 16.375 20.9167C18.0382 19.4221 19.9308 18.072 23.0957 17.3587L22.75 16.6667C18.7267 17.0456 15.6667 19.5 15.6667 19.5C15.6667 19.5 12.0393 24.7601 11.4167 35.0833C15.0717 39.3 20.625 39.3333 20.625 39.3333L21.7867 37.7863C19.8147 37.1007 17.5905 35.8774 15.6667 33.6667C17.9603 35.4021 21.4219 37.2083 27 37.2083C32.5781 37.2083 36.0398 35.4021 38.3333 33.6667C36.4102 35.8774 34.186 37.1007 32.2133 37.7863L33.375 39.3333C33.375 39.3333 38.9283 39.3 42.5833 35.0833C41.9607 24.7601 38.3333 19.5 38.3333 19.5ZM22.3958 32.25C21.0259 32.25 19.9167 30.9821 19.9167 29.4167C19.9167 27.8512 21.0259 26.5833 22.3958 26.5833C23.7658 26.5833 24.875 27.8512 24.875 29.4167C24.875 30.9821 23.7658 32.25 22.3958 32.25ZM31.6042 32.25C30.2343 32.25 29.125 30.9821 29.125 29.4167C29.125 27.8512 30.2343 26.5833 31.6042 26.5833C32.9741 26.5833 34.0833 27.8512 34.0833 29.4167C34.0833 30.9821 32.9741 32.25 31.6042 32.25Z'
            fill='white'
          />
        </svg>
        <span>Discord</span>
      </h2>
      <form
        action=''
        className='md:rounded-md flex flex-row items-center max-w-2xl md:py-6 w-full  bg-[#36393f]'
      >
        <div className='w-full flex flex-col md:w-4/5 items-center'>
          <div className='mb-4 w-5/6 text-left text-2xl'>
            <h1 className='text-white '>Welcome back!</h1>
            <h2 className='text-xl text-[#b9bbbe]'>
              We're so excited to you again!
            </h2>
          </div>

          <Input type='email' label='EMAIL' />
          <Input type='password' label='PASSWORD' />
          <div className='cursor-pointer w-4/5 text-left text-[#00aff4]'>
            Forgot your password?
          </div>
          <button className='bg-[#5865f2] text-white w-5/6 p-2 text-lg my-6'>
            Login
          </button>
          <div className='cursor-pointer w-5/6 text-left text-[#00aff4]'>
            <span className='text-[#72767d] mr-2'>Need an account?</span>
            Register
          </div>
        </div>
        <div className='hidden md:flex md:flex-col py-5 px-5 md:justify-center md:items-center'>
          <img
            src='http://eslkidsgames.com/Flash/QR%20Code%20Maker/eslkidsgames.com.png'
            alt='Qr code'
            className='w-2/3 h-2/3 rounded-md'
          />
          <h1 className='text-white text-xl my-6'>Log in with QR Code</h1>
          <h3 className='text-[#b9bbbe] text-md text-center'>
            Scan this with the <strong>Discord mobile app</strong> to log
            instantly.
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
