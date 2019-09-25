import React from "react";

export default function colums({ item }) {
  return (
    <React.Fragment>
      <div className="col-md-1 col-sm-2 col-3 circle">{item}</div>
      <div className="col-md-5 col-sm-10 col-9">
        <h5 className="title">Lorem Ipsum</h5>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </React.Fragment>
  );
}
