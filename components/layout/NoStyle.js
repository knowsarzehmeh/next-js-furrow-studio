import React from "react";

// import { Sidebar } from "semantic-ui-react";

// import Link from "next/link";

const Default = props => {
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
// export default connect()(Default);
