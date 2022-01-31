const Navbar = () => {
  return (
    <nav className='flex justify-between items-center pt-1 px-16 bg-[#404eed] text-white'>
      <div className='flex items-center '>
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
        <button className='font-extrabold'>Discord</button>
      </div>
      <div className='navigation-buttons-group'>
        <button>Download</button>
        <button>Nitro</button>
        <button>Safety</button>
        <button>Support</button>
        <button>Blog</button>
        <button>Careers</button>
      </div>
      <div>
        <button className='bg-white text-black rounded-full py-2 px-4'>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
