import Link from "next/link";
import Harmburger from "./Harmburger";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
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

              <div
                className="item-right z-index-10 "
                onClick={() => setActive(!active)}
              >
                <Harmburger activeState={active} />
              </div>

              <div className="item-right">
                <p>USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .z-index-10 {
          z-index: 10;
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
