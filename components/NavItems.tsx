import React, { useContext } from 'react';
import Link from 'next/link';
import { Context } from '../pages/_app';

// import { Sidebar } from "semantic-ui-react";

// import Link from "next/link";

const NavItems = (props) => {
  const { path } = props;
  const [state, dispatch] = useContext(Context);
  return (
    <div className='mx-auto z-index-20'>
      <div className='list-group p-1 m-auto'>
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
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
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
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
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
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
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
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
          >
            <div className='d-flex w-100 justify-content-between'>
              <h2 className='mb-1 mx-auto'>CONTACT US</h2>
            </div>
          </a>
        </Link>
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
