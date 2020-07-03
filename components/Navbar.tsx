import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="mrg-head">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="images/exemblar-logo.png"
                className="img-fluid logo"
                alt="logo"
              />

              <div className="item-right">
                <div id="wrapper">
                  <header id="header">
                    <div className="inner">
                      <nav>
                        <ul>
                          <li>
                            <a href="#menu">Menu</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </header>

                  <nav id="menu">
                    <ul>
                      <li>
                        <Link href="/">
                          <a className="font-menu">HOME</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a className="font-menu">ABOUT</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services">
                          <a className="font-menu">SERVICES</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/partners">
                          <a className="font-menu">PARTNERS</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a className="font-menu">GET IN TOUCH</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="item-right">
                <p>USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
