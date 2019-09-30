import React from "react";

export default function footer() {
  return (
    <div className="row container-footer">
      <div className="col-12">
        <div className="row">
          <div className=" col-md-8 col-sm-12 col-12 col-lg-10">
            <p className="footer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about col-md-2 col-sm-12 col-lg-2">
            <a className="link" href="/">
              Terms|
            </a>
            <a className="link" href="/">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
