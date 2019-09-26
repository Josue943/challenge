import React, { Component } from "react";
////
import Search from "./search";
import Colums from "./colums";

export default class index extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6]
  };

  render() {
    const title = "Search Any Email Address";
    const keyword = "Start Here";
    const subtitle =
      "Look up the owner's name, photos and online profiles. See what you find!";
    const { list } = this.state;
    const { onChange, onSubmit, query, errors } = this.props;

    return (
      <React.Fragment>
        <Search
          value={query}
          onChange={onChange}
          onSubmit={onSubmit}
          title={title}
          subtitle={subtitle}
          keyword={keyword}
          errors={errors}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="reverse">Reverse Email Lookup</h1>
            </div>

            <div className="col-md-12">
              <h3 className="intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
            </div>
          </div>
        </div>
        <div className="back-groud">
          <div className="container">
            <div className="row division">
              {list.map(item => (
                <Colums item={item} key={item} />
              ))}
            </div>
          </div>
          <hr />
        </div>    
      </React.Fragment>
    );
  }
}
