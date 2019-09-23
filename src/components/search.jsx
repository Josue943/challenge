import React from 'react'
import lock from '../Images/assets/PNGs/lock.png'

export default function header({value,onChange,onSubmit,title,subtitle,keyword,errors}) {

    return (
        
        <header>
            <div className="container mt-4" >
                
                <div className="row">
                    <h1 className="main col-12">{title}</h1>
                    <h2 className="subtitle col-12"><span className="yellow">{keyword}</span> - {subtitle}</h2> 
                </div>
                   
                <div className="mt-4">
                <form  onSubmit={onSubmit} >  
                    
                  
                    <div className="col-12 form-row align-items-center">
                   <div className="col-md-8 col-sm-12">
                   <input 
                       className={!errors ? 'form-control':'form-control invalid'}
                       
                        value={value}
                        onChange={onChange}
                        type="email" placeholder="EMAIL" />
                     </div>
                     {errors && <p className="errors">{errors}</p>}
                     
                    <div className="col-md-4 col-sm-12">
                    <button className="send"><span className="inside">Go!</span></button>
                    </div> 

               
                    </div>

                 </form> 
                
                </div>
               
                <div className="row mt-3">
                        <img className="lock" src={lock} width="15" height="19" alt="Lock"/><h6 className="message">Enter Any Email Address. They won't be notified.</h6> 
                    </div>
                </div> 
                
            </header>         
                  
    )

}
  
                     
                        
                        
                      
                     
                        
                       
                   
                        


                

        

  
            

                
                    
                  


         
            
                                           
