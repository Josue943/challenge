import React from 'react'
import person from '../Images/assets/PNGs/icn_person.png'

export default function card({contact}) {
    return (
        <div className="col-12 card">
                    <div className="row margincard">
                        <div className="col-md-1 circle2">
                            <img className="inside-box" src={person} alt="person" width="40" height="45"/>
                        </div>
                        <div className="col-10 ">
                            <div className="col-6 ">
                                <h2 className="name">{contact.name}</h2>
                            </div>

                            <div className="col-12">
                                <h3 className="info-context">{contact.notes}</h3>
                            </div>

                            <div className="col-12">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                        <h3 className="info-title">Address</h3>
                                        </div>
                                       
                                        <div className="col-md-12 col-sm-12">
                                        <p className="info-context">{contact.address}</p>
                                        </div>
                                        
                                        </div>
                                    </div>
                                
                                    <div className="col-md-6">
                                        <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                        <h3 className="info-title">Phone Numbers</h3>
                                        </div>
                                        <div className="col-md-12 col-sm-12 info-context">
                                        {contact.phoneNumbers.map(item =>(
                                         <h6 className="cel" key={item.phone}>{item.phone}</h6>
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
                                    <p className="info-context">{contact.email}</p>
                                    </div>
                                    
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                    <h3 className="info-title">Relatives</h3>
                                    </div>
                                    <div className="col-md-12 col-sm-12 info-context">

                                        {contact.relatives.map(item =>(
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
    )
}
