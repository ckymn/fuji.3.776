import React from "react";

const Collapse = (props) => {
  console.log(props);
  return (
    <div>
        <a
        className="btn btn-warning"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ display: "block" }}
        >
          OPEN CARD
        </a>
        <div className="collapse" id="collapseExample">
          {props.children}
        </div>
    </div>
  );
};

export default Collapse;
