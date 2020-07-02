import Link from "next/link";
import "../public/scss/appBar.scss";
export default function Footer(props) {
  const { showBox } = props;
  return (
    <div className="container-fluid header-container mb-5 box-shadow-shade">
      <div className="row padding-container">
        <div className="col-12 header ">
          <nav className="navbar navbar-expand-lg w-100">
            <div className="navbar-brand">
              <Link href="/">
                <a className="navbar-brand">Navbar</a>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active secondary-color">
                  <Link href="/">
                    <a className="nav-link font-regular">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us">
                    <a className="nav-link font-regular">About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="contact">
                    <a className="nav-link font-regular">Contact</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-regular">Services</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
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
        .nav-link.a {
        }
        .box-shadow-shade {
          box-shadow: ${showBox
            ? "0 0 1.8rem rgba(0, 0, 0, 0.15) !important"
            : "0 0 1.8rem transparent !important"};
          // background: green;
        }
      `}</style>

      <style jsx global>{``}</style>
    </div>
  );
}
