import React from 'react'
//img
import logo from '../Images/assets/PNGs/Logo.png'
import person from '../Images/assets/PNGs/icn_person.png'
import search from '../Images/assets/PNGs/icn_search.png'

export default function navbar() {
    return (
        <nav>
           <div className="container">
             <div className="row">
                <div className="col-md-10 col-sm-8 col-8">
                    <img className="logo" src={logo} width="173" height="25" alt="logo"/> 
                </div>
                 <div className="col-md-2 col-sm-4 col-4">
                    <img className="search" src={search} width="23" height="23" alt="search"/>    
                    <img className="person" src={person} width="20" height="23" alt="person"/>   
                </div>
               
              </div>
          
            </div>
        </nav>
    )
}
