import React from "react";

// import { Sidebar } from "semantic-ui-react";

// import Link from "next/link";

const NavItems = (props) => {
  return (
    <div className="">
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">
          <div className="d-flex w-100 justify-content-between">
            <h2 className="mb-1">HOME</h2>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h2 className="mb-1">ABOUT US</h2>
          </div>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h2 className="mb-1">OUR SERVICES</h2>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h2 className="mb-1">CONTACT US</h2>
          </div>
        </a>
      </div>

      <style jsx>{`
        .smoke-screen {
          background: #e5e5e5;
        }
      `}</style>
    </div>
  );
};

export default NavItems;
// export default connect()(Default);
