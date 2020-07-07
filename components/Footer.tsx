import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="container-fluid tertiary-bg px-lg-5">
        <div className="row px-lg-5 mx-lg-3 pb-4 mt-5 pt-5 mx-auto">
          <div className="col-12  col-lg-4 d-flex align-items-lg-center flex-column">
            <div className="mt-4 mb-4 mb-lg-0 text-white">
              <Link href="/">
                <a className="logo-wrapper mb-3">
                  <span className="logo-footer z-index-21 mx-auto mr-2"></span>

                  <h5 className="font-bold font-weight-bold mt-n4">Exemblar</h5>
                </a>
              </Link>

              <p>
                Exemblar Technologies is a parent company that deos this and
                that to hep tjatydbbmakdbfj
              </p>

              <ul className="list-inline mt-3 mb-0">
                <li className="list-inline-item mr-3">
                  <a
                    href="https://web.facebook.com/exemblar/"
                    className="social facebook"
                  >
                    <img
                      src="/icons/facebook-logo.svg"
                      className="img"
                      alt="Responsive image"
                    />
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a
                    href="https://twitter.com/exemblar"
                    className="social twitter"
                  >
                    <img
                      src="/icons/twitter-logo.svg"
                      className="img"
                      alt="Responsive image"
                    />
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a
                    href="https://www.instagram.com/exemblar/"
                    className="social linkedin"
                  >
                    <img
                      src="/icons/instagram-logo.svg"
                      className="img"
                      alt="Responsive image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12  col-lg-4 d-flex align-items-lg-center flex-column ">
            <div className="mt-4 mb-4 mb-lg-0 text-white d-flex flex-column justify-space-between">
              <h5 className="text-white mb-4">LOCATION</h5>

              <span className="d-flex">
                <p className="mr-2 mr-lg-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-geo-alt"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                </p>
                <p>64, ABusi Eduenm , Ipajn , La</p>
              </span>

              <span className="d-flex">
                <p className="mr-2 mr-lg-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-envelope-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                    />
                  </svg>
                </p>
                <a href="exemblar@gmail.com">exemblar@gmail.com</a>
              </span>

              <span className="d-flex">
                <p className="mr-2 mr-lg-3">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-telephone-inbound-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </p>
                <p>+234 901 143 02</p>
              </span>
            </div>
          </div>

          <div className="col-12  col-lg-4 d-flex align-items-lg-center flex-column ">
            <div className="mt-4 mb-4 mb-lg-0 text-white d-flex flex-column justify-space-between">
              <h5 className="text-white mb-4">SITEMAP</h5>
              <Link href="/">
                <a className="mb-3 mb-lg-4">Home</a>
              </Link>

              <Link href="/about-us">
                <a className="mb-3 mb-lg-4">About us</a>
              </Link>

              <Link href="/service">
                <a className="mb-3 mb-lg-4">Our Services</a>
              </Link>

              <Link href="/contact">
                <a className="mb-3 mb-lg-4">Contact us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey copyright">
        <div className="row p-4 ml-1">
          <p className="text-white d-block ml-6 m-auto">
            Copyright © {new Date().getFullYear()} Exemblar.
          </p>
        </div>
      </div>

      <style jsx>{`
        .text-white {
          color: #ffffff !important;
        }
        a {
          color: white;
        }

        .bg-grey {
          background: #121233;
        }
        .copyright {
          border-top: 1px solid #ffffff;
        }
        footer {
          box-sizing: border-box;
          padding: 60px 0;
        }

        footer h5 {
          color: inherit;
        }

        footer p {
          color: inherit;
        }

        footer a {
          color: inherit;
        }
        .logo {
          width: 60px;
          float: left;
        }

        .logo-wrapper {
          display: flex !important;
          flex-direction: column;
          width: 100px !important;
        }

        .logo-footer {
          // position: absolute;
          width: 100%;
          height: 100px;
          left: 0;
          z-index: 122222;
          background: url(/images/exemblar-logo-white.png) no-repeat scroll
            center top;
          top: 0;
          background-size: contain;
        }

        .logo-wrapper .logo-footer:hover {
          width: 100%;
          height: 100px;
          left: 0;
          z-index: 122222;
          background: url(/images/exemblar-logo.png) no-repeat scroll center top;
          top: 0;
          background-size: contain;
        }
      `}</style>

      {/*
            <style jsx global>{`
       
      `}</style>

*/}
    </div>
  );
}
