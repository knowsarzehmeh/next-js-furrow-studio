// import Link from "next/link";

import { useState, useEffect, useContext } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import NavItems from '../NavItems';
import { Context } from '../../pages/_app';

export default function (props) {
  const [scroll, setScroll] = useState(false);
  const { path } = props;
  const [state, dispatch] = useContext(Context);

  // interface ParentCompProps {
  //   clickFunction: (data: boolean) => void;
  // }

  useEffect(() => {
    console.log(state)
    window.addEventListener('scroll', scrollAction);
    return () => window.removeEventListener('scroll', scrollAction);
  }, []);

  const scrollAction = () => {
    const offset = window.scrollY;
    if (offset > 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <div className=''>
      <Navbar
        className='mb-5 pb-5'
        showBox={scroll}
      />


      <div
        className={`${
          state.activeNav ? 'd-block' : 'd-none'
        } margin-top-nav `}>
        <NavItems path={path} />
        </div>   

      <div
        className={`${
          !state.activeNav ? 'd-block' : 'd-none'
        } margin-top `}
      >
        {props.children}
      </div>
      <span className={`${ !state.activeNav ? 'd-block' : 'd-none'} `}>
        <Footer />
      </span>

      <style jsx>{`
      /* .footer-position {
          position:absolute;
      } */
        .margin-top {
          margin-top: 8rem;
        }

        .margin-top-nav {
          margin-top: 8rem;
        }
        .opacity-none {
          opacity: 0 !important;
        }
        .opacity-1 {
          opacity: 1 !important;
        }
        #nav-container {
          // position: fixed;
          font-size: 5px;
          position: fixed;
          top: 30px;
          left: 10px;
          z-index: 7;
        }
        .top {
          top: 0px;
        }
        .width-full {
          width: available;
          z-index: 1;
        }
        .getUp {
          z-index: 6;
        }
        .smoke-screen {
          background: #e5e5e5;
          min-height: 100vh;
        }
      `}</style>

      <style jsx global>{`
        html,
        body,
        #app,
        main {
          min-height: 100%;
          background: ${state.activeNav ? '#121233 !important' : 'inherit'};
        }
      `}</style>
    </div>
  );
}

// export const Layout = page => <Default>{page}</Default>;
