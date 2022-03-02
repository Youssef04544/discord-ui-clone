import Navbar from "./Navbar";

const Landing = () => {
  return (
    <>
      {/* Sidebar */}
      {/* <div className='hidden z-50  justify-end absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-gray-400/50'>
        <nav className='h-full w-2/3 bg-white rounded-l-lg'>Discord</nav>
      </div> */}
      {/* Sidebar end */}
      <div className='m-0 p-0 h-screen w-screen min-h-[626px]'>
        <header className='h-full w-full  relative  bg-[#404eed] min-h-[626px]'>
          <Navbar />
          <div className='w-full md:w-full z-20 relative py-20 px-10 lg:text-center  items-center text-white '>
            <h1 className='text-4xl font-extrabold mb-10'>
              IMAGINE A PLACE...
            </h1>
            <p className='text-lg leading-8'>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community.
              <br className='hidden lg:block' /> Where just you and a handful of
              friends can spend time together.A place that makes it
              <br className='hidden lg:block' /> easy to talk every day and hang
              out more often.
            </p>

            <button className='text-2xl flex lg:inline-flex justify-center items-center mt-6 py-5 px-9 rounded-full bg-white text-[#23272a]'>
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
            <button className='text-2xl flex lg:inline-flex mt-6 py-5 px-9 rounded-full bg-[#23272a] text-white'>
              Open Discord in your browser
            </button>
          </div>
          <div className='absolute top-0 left-0 h-full w-full flex items-end'>
            {/* Clouds bg */}
            <div className='hidden bottom-0 top-auto right-1/3 absolute'>
              <img
                src='/assets/CenterLanding.svg'
                alt='center clouds'
                className='w-full h-full z-10'
              />
            </div>
            {/* left landing bg absolute bottom-0 left-0*/}
            <div className=' w-full flex items-end'>
              {/*350 -10 689 352 */}
              <img
                src='/assets/left_bg_landing_header.svg'
                alt='left header bg'
                className=''
              />
            </div>
            {/* right landing bg */}
            <div className='hidden m-0 p-0 absolute bottom-0 right-0 h-1/2 w-1/2'>
              <img
                src='/assets/right_bg_landing_header.svg'
                alt='right header bg'
                className='w-full h-full'
              />
            </div>
          </div>
        </header>
      </div>
      {/* Invite only start */}
      <div className='flex gap-32 h-screen w-screen justify-center items-center px-40'>
        <img
          src='/assets/invite_only_landing.svg'
          alt='placeholder'
          className='h-2/3 w-2/3'
        />
        <div className='h-1/2 w-1/2'>
          <h1 className='text-5xl font-bold mb-4'>
            Create an invite-only place where you belong
          </h1>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
      {/* Invite only end */}

      {/* Hanging out easy start */}
      <div className='bg-[#f6f6f6] flex gap-32 h-screen w-screen justify-center items-center px-40'>
        <div className='h-1/2 w-1/2'>
          <h1 className='text-4xl font-bold mb-4'>Where hanging out is easy</h1>
          <p>
            Grab a seat in a voice channel when you're free. Friends in your
            server can see you're around and instantly pop in to talk without
            having to call.
          </p>
        </div>

        <img
          src='/assets/hanging_out_easy_landing.svg'
          alt='just chilling'
          className='h-2/3 w-2/3'
        />
      </div>
      {/* hanging out easy end */}

      {/* fandom start */}
      <div className='flex gap-32 h-screen w-screen justify-center items-center px-40'>
        <img
          src='/assets/fandom_landing.svg'
          alt='fandom'
          className='h-2/3 w-2/3'
        />
        <div className='h-1/2 w-1/2'>
          <h1 className='text-5xl font-bold mb-4'>From few to a fandom</h1>
          <p>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>
      {/* fandom end */}

      {/* just chilling start */}
      <div className='bg-[#f6f6f6] text-center flex flex-col h-full w-screen items-center px-40 pt-32 pb-24'>
        <h1 className='text-4xl font-bold mb-4 max-w-2/3'>
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p className='max-w-screen-md'>
          Low-latency voice and video feels like you're in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>

        <img
          src='/assets/just_chiling_landing.svg'
          alt='just chilling'
          className='mb-4'
        />
        <h2 className='mb-8 text-3xl font-bold'>
          Ready to start your journey?
        </h2>
        <button className='text-xl flex gap-1 text-white bg-[#5865f2] rounded-full py-4 px-12'>
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
          Download for Mac
        </button>
      </div>
      {/* just chilling end */}

      {/* footer start */}
      <footer className='h-[70vh] w-screen overflow-none bg-[#23272a] p-20 text-white'>
        <div className='flex justify-between text-xs'>
          <ul>
            <li className='font-extrabold text-4xl'>IMAGINE A PLACE</li>
            <li>
              <img
                src='/assets/usa_flag.png'
                alt='USA FLAG'
                className='inline-block mr-2'
                height={24}
                width={24}
              />
              English, USA
            </li>
            <li className='flex gap-4'>
              <img src='/assets/twitter_icon.svg' alt='twitter' />
              <img src='/assets/instagram_icon.svg' alt='instagram' />
              <img src='/assets/facebook_icon.svg' alt='facebook' />
              <img src='/assets/youtube_icon.svg' alt='youtube' />
            </li>
          </ul>
          <ul>
            <li>Product</li>
            <li>Download</li>
            <li>Nitro</li>
            <li>Status</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>Collage</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Developers</li>
            <li>StreamKit</li>
          </ul>
          <ul>
            <li>Policies</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Guidelines</li>
            <li>Acknowledgements</li>
            <li>Licenses</li>
            <li>Moderation</li>
          </ul>
        </div>
        <hr className='text-[#5865f2] bg-[#5865f2]' />
        <div className='flex justify-between mt-6 items-center'>
          <div className='font-bold'>
            <img
              src='/assets/discord_logo.svg'
              alt='discord logo'
              className='inline'
            />
            Discord
          </div>
          <div className='cursor-pointer rounded-full bg-[#5865f2] w-24 h-10 justify-center items-center flex'>
            Sign up
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default Landing;
