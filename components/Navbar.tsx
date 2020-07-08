import Link from "next/link";
import Harmburger from "./Harmburger";
import { useState, useContext } from "react";
import { Context } from "../pages/_app";

export default function Navbar(props) {
  const [state, dispatch] = useContext(Context);
  const { showBox, path } = props;
  return (
    <div
      className={`container-fluid header-container background-black mb-5
       ${showBox ? "box-shadow-shade" : ""}   ${
        state.activeNav ? "background-black" : ""
      }`}
    >
      <div className="my-0 my-lg-2 px-0 px-md-0 px-lg-2">
        <div className="row padding-container">
          <div className="col-lg-12 px-0 px-md-5 px-lg-1 d-flex flex-direction-column justify-content-between">
            <Link href="/">
              <a className="logo-wrapper">
                <img
                  src="images/exemblar-logo.png"
                  className="img-fluid logo z-index-21 mx-auto mr-2"
                  alt="logo"
                />

                <h5 className="font-bold font-weight-bold font-logo">
                  Exemblar
                </h5>
              </a>
            </Link>
            <div
              className="my-auto  z-index-21"
              onClick={async () => {
                await dispatch({
                  type: "FLIP_ACTIVE_NAV", // The name of the reducer
                  payload: "", // Notice in this reducer, the string is appended to the todos array
                });
                props.setStatePropsMethod(state.activeNav);
              }}
            >
              <Harmburger activeState={state.activeNav} />
            </div>

            {/* <div className="item-right">
                <p>USA</p>
              </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767.98px) {
          .padding-container {
            padding: 0 calc(5vw - 5rem);
            padding-top: 0px;
            padding-right: calc(2vw) !important;
            padding-bottom: 0px;
            padding-left: calc(2vw) !important;
          }

          .logo {
            width: 30px !important;
            float: left;
          }
          font-logo {
            font-size: 60px;
          }
        }

        z-index-21 {
          z-index: 21 !important;
        }

        .background-black {
          background: ${state.activeNav ? "transaparent !important" : "#fff"};
          z-index: ${-20 ? "#111 !important" : "inherit"};
        }
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding-bottom: 0.8rem;
          padding-top: 0.8rem;
          height: auto;
          box-shadow: 0 0 1.8rem transparent;
          // box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s, color 0.5s, background-color 0s;
          transition-property: box-shadow, color;
          transition-duration: 0.3s, 0.5s, 0.5s;
          transition-timing-function: ease, ease, ease;
          transition-delay: 0s, 0s, 0s;
        }

        .header {
          margin-bottom: 30rem !important;
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
          padding-right: calc(15vw - 10rem);
          padding-bottom: 0px;
          padding-left: calc(15vw - 10rem);
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
          width: 60px;
          float: left;
        }

        .mrg-head {
          margin-top: 30px;
        }

        .logo-wrapper {
          display: flex !important;
          flex-direction: column;
        }
      `}</style>
      {/*
            <style jsx global>{`
       
      `}</style>
*/}
    </div>
  );
}
