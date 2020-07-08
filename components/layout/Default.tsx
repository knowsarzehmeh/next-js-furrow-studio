// import Link from "next/link";

import { useState, useEffect, useContext } from 'react';
import AppBar from '../AppBar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import NavItems from '../NavItems';
import { Context } from '../../pages/_app';

export default function (props) {
  const [scroll, setScroll] = useState(false);
  const [navStateProps, setNavStateProps] = useState(false);
  const { path } = props;
  const [state, dispatch] = useContext(Context);

  // interface ParentCompProps {
  //   clickFunction: (data: boolean) => void;
  // }
  const setNavStateAction = (childp) => {
    setNavStateProps(childp);
    return;
  };
  useEffect(() => {
    console.log(state);
    setNavStateProps(true);
    window.addEventListener('scroll', scrollAction);
    return () => window.removeEventListener('scroll', scrollAction);
  }, []);

  const scrollAction = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (offset > 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  //  {/* <AppBar showBox={scroll} /> */}
  return (
    <div className=''>
      <Navbar
        className='mb-5 pb-5'
        showBox={scroll}
        setStatePropsMethod={setNavStateAction}
      />

      <div
        className={`${
          navStateProps ? 'd-none' : 'd-block'
        } mt-lg-5 pt-lg-5 margin-top`}
      >
        <NavItems setStatePropsMethod2={setNavStateAction} path={path} />
      </div>

      <div
        className={`${
          !navStateProps ? 'd-none' : 'd-block'
        } mt-lg-5 pt-lg-5 margin-top`}
      >
        {props.children}
      </div>
      <div className={`${!navStateProps ? 'd-none' : 'd-block'} `}>
        <Footer />
      </div>

      <style jsx>{`
        .margin-top {
          margin-top: 5rem !important;
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
          width: -web-kit-available-;
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
          background: ${!navStateProps ? '#121233 !important' : 'inherit'};
        }
      `}</style>
    </div>
  );
}

// export const Layout = page => <Default>{page}</Default>;
