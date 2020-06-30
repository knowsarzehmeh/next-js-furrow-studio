// import Link from "next/link";

import Navbar from "../Navbar";
import Footer from "../Footer";


export default function (props) {

  return (
    <div className="">
      <Navbar />
      <div className="">{props.children}</div>
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
};

// export const Layout = page => <Default>{page}</Default>;

