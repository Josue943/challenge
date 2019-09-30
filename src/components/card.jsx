import React from "react";
import person from "../Images/assets/PNGs/icn_person.png";

export default function card({ getInfo }) {
    const em = localStorage.getItem('email')
    const data = getInfo(em)
    const {name,notes,address,phoneNumbers,relatives,email} = data
  return (
    <div className="col-11 col-md-12 card">
      <div className="row margincard">
        <div className="col-md-1 circle2">
          <img
            className="inside-box"
            src={person}
            alt="person"
            width="40"
            height="45"
          />
        </div>
        <div className="col-12 col-md-10">
          <div className="col-12">
            <h2 className="name">{name}</h2>
          </div>

          <div className="col-12">
            <h3 className="info-context">{notes}</h3>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <h3 className="info-title">Address</h3>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <p className="info-context">{address}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <h3 className="info-title">Phone Numbers</h3>
                  </div>
                  <div className="col-md-12 col-sm-12 info-context">
                    {phoneNumbers.map(item => (
                      <h6 className="cel" key={item.phone}>
                        {item.phone}
                      </h6>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <h3 className="info-title">Email</h3>
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <p className="info-context">{email}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <h3 className="info-title">Relatives</h3>
                  </div>
                  <div className="col-md-12 col-sm-12 info-context">
                    {relatives.map(item => (
                      <h6 key={item.name}>{item.name}</h6>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

