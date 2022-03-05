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
        {/* Footer start */}
        <div className='bg-[#23272a] pt-20 pb-16 text-white w-full flex flex-col items-center'>
          <div className='w-full max-w-[1260px] box-border grid grid-cols-4 gap-x-5 px-6 md:grid-cols-8 md:px-10 lg:grid-cols-12'>
            <div className='col-span-4 flex flex-col grow mb-14 md:col-span-3 md:col-end-auto md:row-end-2 md:row-span-2'>
              <h4 className='text-[#5865f2] leading-[95%] font-extrabold text-[32px] block'>
                IMAGINE A PLACE
              </h4>
              {/* flag container and arrow*/}
              <div className='mt-6 flex items-center'>
                <div className='relative'>
                  <div className='flex items-center cursor-pointer'>
                    <div className='flex items-center'>
                      <img
                        src='assets/usa_flag.png'
                        alt='usa flag'
                        className='w-6 h-4 mr-2'
                      />
                      <div className='text-sm'>ENGLISH, USA</div>
                    </div>
                    <img
                      className='pl-2'
                      src='/assets/angle-down-solid.svg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              {/* Social icons container */}
              <div className='mt-6 flex items-center'>
                <a href='twitter.com' className='no-underline cursor-pointer'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    class='socialIcon-32i0_n'
                  >
                    <path
                      fill='white'
                      d='M8.2177 20.2976C15.798 20.2976 19.9327 14.0329 19.9327 8.58261V8.05011C20.7362 7.46091 21.435 6.74089 22 5.92012C21.2567 6.26235 20.4637 6.48437 19.6507 6.57791C20.5139 6.06164 21.1597 5.24885 21.4675 4.2913C20.6598 4.76183 19.7822 5.10021 18.8677 5.29365C17.3053 3.64491 14.7069 3.56109 13.0415 5.10571C11.9701 6.10222 11.5157 7.59694 11.8512 9.02114C8.54594 8.85772 5.46574 7.29769 3.37823 4.72983C2.28095 6.60789 2.84519 9.01622 4.66249 10.2114C4.00661 10.1858 3.36464 10.0146 2.78309 9.71026V9.7729C2.78257 11.7293 4.15628 13.417 6.07204 13.8136C5.46884 13.9751 4.83671 13.9965 4.22396 13.8763C4.76475 15.5538 6.31437 16.7003 8.07674 16.7267C6.62377 17.8749 4.82287 18.4936 2.97103 18.4808C2.65779 18.4808 2.31323 18.4495 2 18.4182C3.84433 19.6513 6.0148 20.3057 8.23336 20.2976'
                    ></path>
                  </svg>
                </a>
                <a
                  href='instagram.com'
                  className='no-underline cursor-pointer ml-6'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    class='socialIcon-32i0_n'
                  >
                    <g fill='white'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.9969 2.00632C9.28187 2.00632 8.94143 2.01783 7.87516 2.06648C6.81111 2.11501 6.0844 2.28402 5.44853 2.53116C4.79115 2.78659 4.23365 3.12842 3.67786 3.68417C3.1221 4.23997 2.78028 4.79747 2.52484 5.45485C2.2777 6.09072 2.10869 6.81743 2.06016 7.88148C2.01151 8.94775 2 9.28818 2 12.0032C2 14.7181 2.01151 15.0586 2.06016 16.1249C2.10869 17.1889 2.2777 17.9156 2.52484 18.5515C2.78028 19.2089 3.1221 19.7664 3.67786 20.3222C4.23365 20.8779 4.79115 21.2197 5.44853 21.4752C6.0844 21.7223 6.81111 21.8913 7.87516 21.9398C8.94143 21.9885 9.28187 22 11.9969 22C14.7118 22 15.0523 21.9885 16.1185 21.9398C17.1826 21.8913 17.9093 21.7223 18.5452 21.4752C19.2025 21.2197 19.76 20.8779 20.3158 20.3222C20.8716 19.7664 21.2134 19.2089 21.4689 18.5515C21.716 17.9156 21.885 17.1889 21.9335 16.1249C21.9822 15.0586 21.9937 14.7181 21.9937 12.0032C21.9937 9.28818 21.9822 8.94775 21.9335 7.88148C21.885 6.81743 21.716 6.09072 21.4689 5.45485C21.2134 4.79747 20.8716 4.23997 20.3158 3.68417C19.76 3.12842 19.2025 2.78659 18.5452 2.53116C17.9093 2.28402 17.1826 2.11501 16.1185 2.06648C15.0523 2.01783 14.7118 2.00632 11.9969 2.00632ZM11.9969 3.80755C14.6661 3.80755 14.9823 3.81775 16.0364 3.86584C17.0111 3.91029 17.5404 4.07314 17.8927 4.21005C18.3593 4.3914 18.6923 4.60802 19.0421 4.95786C19.392 5.30767 19.6086 5.64068 19.79 6.10731C19.9269 6.45957 20.0897 6.9889 20.1342 7.96358C20.1823 9.01771 20.1925 9.3339 20.1925 12.0032C20.1925 14.6724 20.1823 14.9886 20.1342 16.0427C20.0897 17.0174 19.9269 17.5468 19.79 17.899C19.6086 18.3656 19.392 18.6987 19.0421 19.0485C18.6923 19.3983 18.3593 19.6149 17.8927 19.7963C17.5404 19.9332 17.0111 20.096 16.0364 20.1405C14.9825 20.1886 14.6663 20.1988 11.9969 20.1988C9.32738 20.1988 9.01127 20.1886 7.95726 20.1405C6.98258 20.096 6.45325 19.9332 6.10099 19.7963C5.63437 19.6149 5.30135 19.3983 4.95155 19.0485C4.60175 18.6987 4.38508 18.3656 4.20373 17.899C4.06683 17.5468 3.90397 17.0174 3.85952 16.0427C3.81143 14.9886 3.80123 14.6724 3.80123 12.0032C3.80123 9.3339 3.81143 9.01771 3.85952 7.96358C3.90397 6.9889 4.06683 6.45957 4.20373 6.10731C4.38508 5.64068 4.60171 5.30767 4.95155 4.95786C5.30135 4.60802 5.63437 4.3914 6.10099 4.21005C6.45325 4.07314 6.98258 3.91029 7.95726 3.86584C9.01139 3.81775 9.32758 3.80755 11.9969 3.80755Z'
                      ></path>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.9968 15.3355C10.1564 15.3355 8.66451 13.8435 8.66451 12.0032C8.66451 10.1628 10.1564 8.67089 11.9968 8.67089C13.8372 8.67089 15.3291 10.1628 15.3291 12.0032C15.3291 13.8435 13.8372 15.3355 11.9968 15.3355ZM11.9968 6.86966C9.16161 6.86966 6.86328 9.16799 6.86328 12.0032C6.86328 14.8384 9.16161 17.1367 11.9968 17.1367C14.832 17.1367 17.1303 14.8384 17.1303 12.0032C17.1303 9.16799 14.832 6.86966 11.9968 6.86966Z'
                      ></path>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M18.5328 6.66684C18.5328 7.32938 17.9957 7.86644 17.3331 7.86644C16.6706 7.86644 16.1335 7.32938 16.1335 6.66684C16.1335 6.0043 16.6706 5.46719 17.3331 5.46719C17.9957 5.46719 18.5328 6.0043 18.5328 6.66684Z'
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  href='facebook.com'
                  className='no-underline cursor-pointer ml-6'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    class='socialIcon-32i0_n'
                  >
                    <path
                      fill='white'
                      d='M20.875 2H3.09375C2.46875 2 2 2.5 2 3.09375V20.875C2 21.5 2.5 21.9687 3.09375 21.9687H12.6875V14.2188H10.0625V11.1875H12.6562V8.96874C12.6562 6.375 14.2187 4.96875 16.5312 4.96875C17.625 4.96875 18.5937 5.0625 18.875 5.09375V7.78125H17.2812C16.0312 7.78125 15.7812 8.375 15.7812 9.25V11.1875H18.7812L18.4062 14.25H15.8125V22H20.9062C21.5312 22 22 21.5 22 20.9062V3.125C22 2.46875 21.5 2 20.875 2Z'
                    ></path>
                  </svg>
                </a>
                <a
                  href='youtube.com'
                  className='no-underline cursor-pointer ml-6'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    class='socialIcon-32i0_n'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M21.3766 4.10479C22.4093 4.38257 23.2225 5.20102 23.4985 6.24038C24 8.12411 24 12.0545 24 12.0545C24 12.0545 24 15.9848 23.4985 17.8688C23.2225 18.908 22.4093 19.7265 21.3766 20.0044C19.505 20.5091 12 20.5091 12 20.5091C12 20.5091 4.49496 20.5091 2.62336 20.0044C1.59082 19.7265 0.777545 18.908 0.501545 17.8688C0 15.9848 0 12.0545 0 12.0545C0 12.0545 0 8.12411 0.501545 6.24038C0.777545 5.20102 1.59082 4.38257 2.62336 4.10479C4.49496 3.59998 12 3.59998 12 3.59998C12 3.59998 19.505 3.59998 21.3766 4.10479ZM15.8182 12.0546L9.54551 15.623V8.48596L15.8182 12.0546Z'
                      fill='white'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* invisible spacer */}
            <div className='hidden md:col-span-1 md:row-end-2 md:row-span-2 md:block'></div>
            {/* Product container */}
            <div className='col-span-2 mb-10'>
              <h5 className='text-[#5865f2] pt-2 text-sm'>Product</h5>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Download
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Nitro
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Status
              </a>
            </div>
            {/* Company container */}
            <div className='col-span-2 mb-10'>
              <h5 className='text-[#5865f2] pt-2 text-sm'>Company</h5>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                About
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Jobs
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Branding
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Newsroom
              </a>
            </div>
            {/* Resources container */}
            <div className='col-span-2 mb-10'>
              <h5 className='text-[#5865f2] pt-2 text-sm'>Resources</h5>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                College
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Support
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Safety
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Blog
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Feedback
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Developers
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                StreamKit
              </a>
            </div>
            {/* Policies container */}
            <div className='col-span-2 mb-10'>
              <h5 className='text-[#5865f2] pt-2 text-sm'>Policies</h5>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Terms
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Privacy
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Cookie Settings
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Guidelines
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Acknowledgements
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Licenses
              </a>
              <a href='#' className='mt-2 block cursor-pointer no-underline'>
                Moderation
              </a>
            </div>
          </div>
          {/* Sign up footer part */}
          <div className='w-full max-w-[1260px] box-border grid grid-cols-4 gap-x-5 px-6'>
            <div className='col-span-4'>
              <div className='bg-[#5865f2] h-[1px] w-full mb-8'></div>
              <div className='flex items-center justify-between'>
                <a
                  href='#'
                  className='flex items-center justify-center cursor-pointer no-underline font-bold text-xl'
                >
                  <svg
                    width='55'
                    height='55'
                    viewBox='0 0 55 55'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='55' height='55' fill='none' />
                    <path
                      d='M38.3333 19.5C38.3333 19.5 35.0849 16.9571 31.25 16.6667L30.9043 17.3587C34.3709 18.208 35.9618 19.4221 37.625 20.9167C34.7584 19.4533 31.93 18.0833 27 18.0833C22.07 18.0833 19.2416 19.4533 16.375 20.9167C18.0382 19.4221 19.9308 18.072 23.0957 17.3587L22.75 16.6667C18.7267 17.0456 15.6667 19.5 15.6667 19.5C15.6667 19.5 12.0393 24.7601 11.4167 35.0833C15.0717 39.3 20.625 39.3333 20.625 39.3333L21.7867 37.7863C19.8147 37.1007 17.5905 35.8774 15.6667 33.6667C17.9603 35.4021 21.4219 37.2083 27 37.2083C32.5781 37.2083 36.0398 35.4021 38.3333 33.6667C36.4102 35.8774 34.186 37.1007 32.2133 37.7863L33.375 39.3333C33.375 39.3333 38.9283 39.3 42.5833 35.0833C41.9607 24.7601 38.3333 19.5 38.3333 19.5ZM22.3958 32.25C21.0259 32.25 19.9167 30.9821 19.9167 29.4167C19.9167 27.8512 21.0259 26.5833 22.3958 26.5833C23.7658 26.5833 24.875 27.8512 24.875 29.4167C24.875 30.9821 23.7658 32.25 22.3958 32.25ZM31.6042 32.25C30.2343 32.25 29.125 30.9821 29.125 29.4167C29.125 27.8512 30.2343 26.5833 31.6042 26.5833C32.9741 26.5833 34.0833 27.8512 34.0833 29.4167C34.0833 30.9821 32.9741 32.25 31.6042 32.25Z'
                      fill='white'
                    />
                  </svg>
                  Discord
                </a>
                <a
                  href='#'
                  className='rounded-[40px] text-sm py-[7px] px-4 bg-[#5865f2] text-white font-medium cursor-pointer inline-flex items-center box-border no-underline'
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer end */}
      </div>
    </div>
  );
};

export default _Landing;
