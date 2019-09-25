import React from "react";

export default function error() {
  return (
    <div className="container mt-4 not-founded">
      <div className="row">
        <div className="col-12 ">
          <h1 className="result">No information found</h1>
        </div>
        <div className="col-12">
          <h1 className="result col-12">Try to find again</h1>
        </div>
      </div>
    </div>
  );
}
