import React, { useContext } from 'react';
import Link from 'next/link';
import { Context } from '../pages/_app';

// import { Sidebar } from "semantic-ui-react";

// import Link from "next/link";

const NavItems = (props) => {
  const { path } = props;
  const [state, dispatch] = useContext(Context);
  return (
    <div className='mx-auto z-index-20 mt-sm-n5 mt-md-n3 mt-0'>
      <div className='list-group p-1 m-auto mt-sm-n5 mt-md-n3 mt-0'>
        <Link href='/'>
          <a
            onClick={async () => {
              await dispatch({
                type: 'FLIP_ACTIVE_NAV', // The name of the reducer
                payload: '', // Notice in this reducer, the string is appended to the todos array
              });
              
            }}
            className={`${
              path == '/' ? 'active' : ''
            } list-group-item list-group-item-action mt-1 mt-0 border-none mx-auto`}
          >
            <div className='d-flex w-100 justify-content-between'>
              <h2 className='mb-1 mx-auto'>HOME</h2>
            </div>
          </a>
        </Link>

        <Link href='/about-us'>
          <a
            onClick={async () => {
              await dispatch({
                type: 'FLIP_ACTIVE_NAV', // The name of the reducer
                payload: '', // Notice in this reducer, the string is appended to the todos array
              });
              
            }}
            className={`${
              path.includes('about-us') ? 'active' : ''
            } list-group-item list-group-item-action mt-1 border-none mx-auto`}
          >
            <div className='d-flex w-100 justify-content-between'>
              <h2 className='mb-1 mx-auto'>ABOUT US</h2>
            </div>
          </a>
        </Link>

        <Link href='/service'>
          <a
            onClick={async () => {
              await dispatch({
                type: 'FLIP_ACTIVE_NAV', // The name of the reducer
                payload: '', // Notice in this reducer, the string is appended to the todos array
              });
            }}
            className={`${
              path.includes('service') ? 'active' : ''
            } list-group-item list-group-item-action mt-1 border-none mx-auto`}
          >
            <div className='d-flex w-100 justify-content-between'>
              <h2 className='mb-1 mx-auto'>OUR SERVICES</h2>
            </div>
          </a>
        </Link>

        <Link href='/contact'>
          <a
            onClick={async () => {
              await dispatch({
                type: 'FLIP_ACTIVE_NAV', // The name of the reducer
                payload: '', // Notice in this reducer, the string is appended to the todos array
              });
              
            }}
            className={`${
              path.includes('contact') ? 'active' : ''
            } list-group-item list-group-item-action mt-1 border-none mx-auto`}
          >
            <div className='d-flex w-100 justify-content-between'>
              <h2 className='mb-1 mx-auto'>CONTACT US</h2>
            </div>
          </a>
        </Link>
      </div>

      <div className='col-12  col-lg-4 d-flex align-items-lg-center flex-column mx-auto text-center'>
            <div className='mt-1 mt-4 mb-lg-0 text-white'>
              <Link href='/'>
                <a className='logo-wrapper mb-0'>
                  <span className='logo-footer z-index-21 mx-auto'></span>
                </a>
              </Link>

              <p className='my-1'>
              Exemblar is a web design , app development and related technologies company 
              that creates a platform for business owners, individuals, group of companies.
              </p>

              <ul className='list-inline mt-3 mb-0'>
                <li className='list-inline-item mr-3'>
                  <a
                    href='https://web.facebook.com/exemblar/'
                    className='social facebook'
                  >
                    <img
                      src='/icons/facebook-logo.svg'
                      className='img'
                      alt='Responsive image'
                    />
                  </a>
                </li>
                <li className='list-inline-item mr-3'>
                  <a
                    href='https://twitter.com/exemblarTech'
                    className='social twitter'
                  >
                    <img
                      src='/icons/twitter-logo.svg'
                      className='img'
                      alt='Responsive image'
                    />
                  </a>
                </li>
                <li className='list-inline-item mr-3'>
                  <a
                    href='https://www.instagram.com/exemblar/'
                    className='social linkedin'
                  >
                    <img
                      src='/icons/instagram-logo.svg'
                      className='img'
                      alt='Responsive image'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12  col-lg-4 d-flex align-items-lg-center flex-column mx-auto text-center'>
            <div className='mt-4 mb-4 mb-lg-0 text-white d-flex flex-column justify-space-between text-center'>
              <span className='d-flex justify-content-center'>
                <p className='mr-2 mr-lg-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-geo-alt'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
                    />
                  </svg>
                </p>
                <p>12, Hon Ajayi Alaba Street, Ilasan Lekki, Lagos, Nigeria</p>
              </span>

              <span className='d-flex justify-content-center'>
                <p className='mr-2 mr-lg-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-envelope-fill'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z'
                    />
                  </svg>
                </p>
                <a href='exemblar@gmail.com'>exemblar@gmail.com</a>
              </span>

              <span className='d-flex text-center justify-content-center'>
                <p className='mr-2 mr-lg-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-telephone-inbound-fill'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z'
                    />
                  </svg>
                </p>
                <p>+234 901 143 02</p>
              </span>
            </div>
          </div>

      <style jsx>{`
        //.z-index-20 {
        //  z-index: 20 !important;
        // position: absolute !important;
        // top: 0;
        // }
        a {
          color: #ffffff !important;
        }
        a:hover {
          color: var(--blue) !important;
        }

        .list-group-item {
          width: fit-content !important;
        }
        .list-group-item.active {
          color: var(--pink) !important;
          background-color: transparent !important;
        }
        .list-group-item:hover {
          background-color: transparent !important;
        }
        .list-group-item.active :active {
          color: var(--blue) !important;
          background-color: transparent !important;
        }
        .list-group-item.active :hover {
          background-color: transparent !important;
        }
        .list-group-item-action:hover,
        .list-group-item-action:focus {
          background-color: transparent !important;
        }
        .border-none {
          border: none !important;
        }

        .list-group-item {
          position: relative;
          display: block;
          padding: 0.75rem 1.25rem;
          background-color: transparent;
          border: 1px solid rgba(0, 0, 0, 0.125);
        }
        .smoke-screen {
          background: #e5e5e5;
        }
      `}</style>
    </div>
  );
};

export default NavItems;
// export default connect()(Default);
