// import Link from "next/link";

import { useState, useEffect } from 'react';
import AppBar from '../AppBar';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function (props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', scrollAction);
    return () => window.removeEventListener('scroll', scrollAction);
  }, []);

  const scrollAction = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (offset > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <div className=''>
      <AppBar showBox={scroll} />
      <Navbar />
      <div className='mt-5 pt-5'>{props.children}</div>
      <Footer />

      <style jsx>{`
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
    </div>
  );
}

// export const Layout = page => <Default>{page}</Default>;
