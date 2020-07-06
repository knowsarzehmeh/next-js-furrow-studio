import React from "react";

const Default = (props) => {
  return (
    <div className="">
      {props.children}

      <style jsx>{`
        .smoke-screen {
          background: #e5e5e5;
        }
      `}</style>
    </div>
  );
};

export default Default;
