import React, { Fragment } from "react";

import spinner from "../../images/loading.jpg";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "50px", height: "50px", margin: "15px auto" }}
        alt="loading..."
      />
    </Fragment>
  );
};

export default Spinner;
