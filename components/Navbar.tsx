import Link from "next/link";
import Harmburger from "./Harmburger";
import { useState } from "react";

export default function Navbar(props) {
  const [active, setActive] = useState(false);
  const { showBox } = props;
  return (
    <div
      className={`container-fluid header-container mb-5 ${
        showBox ? "box-shadow-shade" : ""
      }`}
    >
      <div className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="images/exemblar-logo.png"
                className="img-fluid logo"
                alt="logo"
              />

              <div
                className="item-right z-index-10 "
                onClick={async () => {
                  await setActive(!active);
                  props.setStatePropsMethod(active);
                }}
              >
                <Harmburger activeState={active} />
              </div>

              {/* <div className="item-right">
                <p>USA</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: #fff;
          z-index: 10;
          padding-bottom: 0.8rem;
          padding-top: 0.8rem;
          height: auto;
          box-shadow: 0 0 1.8rem transparent;
          // box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s, color 0.5s, background-color 0.5s;
          transition-property: box-shadow, color, background-color;
          transition-duration: 0.3s, 0.5s, 0.5s;
          transition-timing-function: ease, ease, ease;
          transition-delay: 0s, 0s, 0s;
        }

        .header {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          font-size: 1.05rem;
          justify-content: space-between;
          width: 100%;
        }

        .padding-container {
          padding: 0 calc(10vw - 10rem);
          padding-top: 0px;
          padding-right: calc(13vw - 10rem);
          padding-bottom: 0px;
          padding-left: calc(13vw - 10rem);
        }
        li.nav-item a {
          color: var(--primaryColor);
        }
        .navbar-expand-lg .navbar-nav .nav-link {
          padding-right: 0 !important;
          padding-left: 0 !important;
          margin-right: 1rem !important;
          margin-left: 1rem !important;
        }

        .header-container.box-shadow-shade {
          box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.15) !important;

          // background: green;
        }
        .item-right {
          float: right;
        }

        .logo {
          width: 170px;
          float: left;
        }

        .mrg-head {
          margin-top: 30px;
        }
      `}</style>
      {/*
            <style jsx global>{`
       
      `}</style>
*/}
    </div>
  );
}
