import React from "react";
import Link from "next/link";

// import { Sidebar } from "semantic-ui-react";

// import Link from "next/link";

const NavItems = (props) => {
  const { path } = props;
  return (
    <div className="">
      <div className="list-group p-1">
        <Link href="/">
          <a
            className={`${
              path == "/" ? "active" : ""
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
          >
            <div className="d-flex w-100 justify-content-between">
              <h2 className="mb-1 mx-auto">HOME</h2>
            </div>
          </a>
        </Link>

        <Link href="/about-us">
          <a
            className={`${
              path.includes("about-us") ? "active" : ""
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
          >
            <div className="d-flex w-100 justify-content-between">
              <h2 className="mb-1 mx-auto">ABOUT US</h2>
            </div>
          </a>
        </Link>

        <Link href="/service">
          <a
            className={`${
              path.includes("service") ? "active" : ""
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
          >
            <div className="d-flex w-100 justify-content-between">
              <h2 className="mb-1 mx-auto">OUR SERVICES</h2>
            </div>
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={`${
              path.includes("contact") ? "active" : ""
            } list-group-item list-group-item-action mt-2 border-none mx-auto`}
          >
            <div className="d-flex w-100 justify-content-between">
              <h2 className="mb-1 mx-auto">CONTACT US</h2>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        a {
          color: var(--pink) !important;
        }
        a:hover {
          color: var(--blue) !important;
        }

        .list-group-item {
          width: fit-content !important;
        }
        .list-group-item.active {
          color: var(--blue) !important;
          background-color: transparent !important;
        }
        .list-group-item:hover {
          background-color: transparent !important;
        }
        .list-group-item.active :active {
          color: var(--blue) !important;
          background-color: transparent !important;
        }
        .list-group-item.active :hover {
          background-color: transparent !important;
        }
        .list-group-item-action:hover,
        .list-group-item-action:focus {
          background-color: transparent !important;
        }
        .border-none {
          border: none !important;
        }

        .list-group-item {
          position: relative;
          display: block;
          padding: 0.75rem 1.25rem;
          background-color: transparent;
          border: 1px solid rgba(0, 0, 0, 0.125);
        }
        .smoke-screen {
          background: #e5e5e5;
        }
      `}</style>
    </div>
  );
};

export default NavItems;
// export default connect()(Default);
