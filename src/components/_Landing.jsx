import Navbar from "./Navbar";

const _Landing = () => {
  return (
    <div className='h-full overflow-x-hidden'>
      <div>
        {/* Imagine a place start */}
        <div className='flex flex-col relative min-h-[626px] w-full items-center bg-[#404eed]'>
          {/* Top navigation bar */}
          <nav className='relative z-[1] flex justify-between items-center w-full pt-2 px-4 md:px-16 bg-[#404eed] text-white max-w-[1260px]'>
            <div className='flex items-center text-xl'>
              <svg
                width='65'
                height='65'
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
            <div className='hidden lg:block navigation-buttons-group'>
              <a href='#'>Download</a>
              <a href='#'>Nitro</a>
              <a href='#'>Safety</a>
              <a href='#'>Support</a>
              <a href='#'>Blog</a>
              <a href='#'>Careers</a>
            </div>
            <div className='flex space-x-3 text-md'>
              <button className='bg-white text-black rounded-full py-3 px-5'>
                Login
              </button>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='lg:hidden h-12 w-12'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </nav>
          {/* end Top navigation bar */}
          {/* Second row : imagine a place */}
          <div className='w-full max-w-[1260px] grid grid-cols-4 z-1 py-14 gap-x-5 px-6 md:grid-cols-8 md:py-20 relative z-[1] lg:py-[120px] lg:grid-cols-12 lg:px-10 '>
            <div className='col-span-4 md:col-span-5 lg:col-start-3 lg:text-center lg:col-span-8'>
              {/* Imagine a place text zone */}
              <div className='text-white md:mb-2'>
                <h1 className='font-extrabold imagine-header'>
                  IMAGINE A PLACE...
                </h1>
                <div
                  className='mt-6 leading-relaxed md:mt-10'
                  style={{
                    fontSize: "clamp(16px,2vw,20px)",
                  }}
                >
                  ...where you can belong to a school club, a gaming group, or a
                  worldwide art community. Where just you and a handful of
                  friends can spend time together.A place that makes it easy to
                  talk every day and hang out more often.
                </div>
              </div>
              {/* End imagine a place text zone */}
              <div className='flex flex-wrap items-center lg:justify-center'>
                <button className='text-xl flex mr-5 lg:inline-flex justify-center items-center mt-6 py-3 px-9 rounded-full bg-white text-[#23272a] md:mr-6 md:mt-6 md:py-4 md:px-8'>
                  <svg
                    width='20'
                    height='20'
                    className='mr-2'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='download'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z'
                    ></path>
                  </svg>
                  Download for Windows
                </button>
                <button className='text-xl flex lg:inline-flex mt-6 py-3 px-9 rounded-full bg-[#23272a] text-white md:mt-6 md:py-4 md:px-8'>
                  Open Discord in your browser
                </button>
              </div>
            </div>
          </div>
          {/*end second row */}
          {/* Images containers for imagine a place */}
          <div
            className='select-none relative z-0 md:absolute md:top-0 md:left-0 h-full w-full'
            aria-hidden='true'
          >
            <img
              className='hidden md:block absolute top-auto bottom-0'
              src='/assets/center_bg_landing_header.svg'
              alt=''
            />
            <img
              className='block w-full max-w-[880px] z-1 relative ml-[-80px] md:hidden lg:block lg:absolute lg:h-auto lg:w-auto lg:bottom-0 lg:left-1/2 lg:ml-[-980px]'
              src='/assets/left_bg_landing_header.svg'
              alt=''
            />
            <img
              className='hidden md:block md:absolute md:bottom-0 md:left-1/2 ml-[-70px] lg:ml-[370px]'
              src='/assets/right_bg_landing_header.svg'
              alt=''
            />
          </div>
          {/*end Images containers for imagine a place */}
        </div>
        {/* Imagine a place end */}
        {/* Invite only start */}
        <div className='w-full flex flex-col relative items-center'>
          <div className='grid grid-cols-4 gap-x-4 py-14 px-6 w-full max-w-[1260px] md:py-20 md:grid-cols-8 md:gap-x-6 md:px-10 lg:py-[120px] lg:grid-cols-12'>
            <img
              src='/assets/invite_only_landing.svg'
              alt='placeholder'
              className='col-span-4 max-w-[678px] max-h-[440px] w-full mt-6 object-cover md:m-auto lg:col-span-7 '
            />
            <div className='mt-5 text-[#23272a] col-span-4 md:mt-0 md:flex md:flex-col md:justify-center lg:col-start-9'>
              <h2 className='font-bold h-two-styling'>
                Create an invite-only place where you belong
              </h2>
              <div
                className='mt-6 leading-relaxed'
                style={{ fontSize: "clamp(16px,2vw,20px)" }}
              >
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </div>
            </div>
          </div>
        </div>
        {/* Invite only end */}
        {/* Hanging out easy start */}
        <div className='bg-[#f6f6f6] w-full flex flex-col items-center'>
          <div className='grid grid-cols-4 gap-x-4 py-14 px-6 w-full max-w-[1260px] md:py-20 md:grid-cols-8 md:gap-x-6 md:px-10 lg:py-[120px] lg:grid-cols-12'>
            <img
              src='/assets/hanging_out_easy_landing.svg'
              alt='just chilling'
              className='order-2 col-span-4 max-w-[678px] max-h-[440px] w-full mt-6 object-cover md:m-auto lg:col-span-7 lg:col-start-6'
            />
            <div className='order-1 mt-5 col-span-4 text-[#23272a] md:mt-0 md:flex md:flex-col md:justify-center lg:col-start-1'>
              <h2 className='font-bold h-two-styling'>
                Where hanging out is easy
              </h2>
              <div
                className='mt-6 leading-relaxed'
                style={{ fontSize: "clamp(16px,2vw,20px)" }}
              >
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </div>
            </div>
          </div>
        </div>
        {/* Hanging out easy end */}
        {/* Fandom start */}
        <div className='w-full flex flex-col relative items-center'>
          <div className='grid grid-cols-4 gap-x-4 py-14 px-6 w-full max-w-[1260px] md:py-20 md:grid-cols-8 md:gap-x-6 md:px-10 lg:py-[120px] lg:grid-cols-12'>
            <img
              src='/assets/fandom_landing.svg'
              alt='placeholder'
              className='col-span-4 max-w-[678px] max-h-[440px] w-full mt-6 object-cover md:m-auto lg:col-span-7 '
            />
            <div className='mt-5 text-[#23272a] col-span-4 md:mt-0 md:flex md:flex-col md:justify-center lg:col-start-9'>
              <h2 className='font-bold h-two-styling'>From few to a fandom</h2>
              <div
                className='mt-6 leading-relaxed'
                style={{ fontSize: "clamp(16px,2vw,20px)" }}
              >
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </div>
            </div>
          </div>
        </div>
        {/* Fandom end */}
        {/* Reliable Tech start */}
        <div className='bg-[#f6f6f6] w-full flex flex-col items-center'>
          <div className='w-full max-w-[1260px] grid grid-cols-4 gap-x-5 px-6 py-14 box-border md:py-20 md:grid-cols-8 md:px-10 lg:pb-20 lg:pt-[120px] lg:grid-cols-12'>
            <div className='text-[#23272a] col-span-4 md:text-center md:flex md:flex-col md:justify-center md:col-span-8 lg:col-start-2 lg:col-span-10'>
              <h2 className='h-two-styling-special'>
                RELIABLE TECH FOR STAYING CLOSE
              </h2>
              <div
                className='mt-6 leading-relaxed'
                style={{ fontSize: "clamp(16px,2vw,20px)" }}
              >
                Low-latency voice and video feels like you're in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </div>
            </div>
            <img
              src='/assets/just_chiling_landing.svg'
              alt='just chilling'
              className='col-span-4 object-cover mt-6 w-full md:col-span-8 lg:col-span-12 lg:mt-4'
            />
          </div>
        </div>
        {/* Reliable Tech end */}
        {/* Journey start */}
        <div className='bg-[#f6f6f6] w-full flex flex-col items-center'>
          <div className='mb-14 flex flex-col justify-center items-center flex-wrap relative w-full max-w-[1260px] box-border px-6 md:mb-20 md:px-10 lg:mb-[120px]'>
            <div
              aria-hidden='true'
              className='absolute top-0 w-full overflow-hidden flex justify-center'
            >
              <img
                src='/assets/tiny_stars_landing.svg'
                alt='stars'
                className='select-none'
              />
            </div>
            <h4 className='z-[1] mt-[30px] font-semibold text-[32px] leading-[120%]'>
              Read to start your journey?
            </h4>
            <a
              href='https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86'
              className='mt-10 w-full justify-center rounded-[28px] text-[20px] py-4 px-8 bg-[#5865f2] text-white cursor-pointer font-medium leading-[24px] inline-flex box-border items-center no-underline md:w-auto'
            >
              <svg
                width='20'
                height='20'
                className='mr-2'
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='download'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z'
                ></path>
              </svg>
              Download for Windows
            </a>
          </div>
        </div>
        {/* Journey end */}
      </div>
    </div>
  );
};

export default _Landing;
