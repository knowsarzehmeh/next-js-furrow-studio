import React from "react";

const Default = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h2 className="tertiary-color text-center">
            You will be in good <br /> company
          </h2>
          <p className="lead text-center">
            Trust us to take your ideation <br /> to realisation
          </p>
        </div>
      </div>

      <div className="row mt-3 mt-lg-3">
        <div className="col d-flex justify-content-center">
          <img
            className=" client-logo mx-2 mx-lg-4 img-fluid"
            src="/images/eve-icon-logo-black.png"
          />
          <img
            className="client-logo mx-2 mx-lg-4 img-fluid"
            src="/images/masta.png"
          />
        </div>
      </div>
      <style jsx>{`
        .client-logo {
          max-width: 200px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Default;
