 import React, { Component } from 'react'
     //components
import Card from './card';
import Search from './search';
import Error from './error'
 export default class report extends Component {
   
    render() {
        const {query,onChange,onSubmit,email,errors} = this.props;
        const title ='Can’t Find The Right Person?';
        const keyword ='Try Again';
        const subtitle="Make a new search"
        if(email.length===0){
            
            return(
               <React.Fragment>
                    <Error />
                    <Search value={query} onChange={onChange}  onSubmit={onSubmit} title={title} subtitle={subtitle} keyword={keyword}  />
               </React.Fragment>
            )

            }else{
                return(
                    <React.Fragment>
                    <div className="container report">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="result">Result</h1>
                            </div>
                        <div className="col-12">
                            <h3 className="found">Look at the result below to see the details of the person you’re searched for.</h3>
                        </div>
                        <Card contact={email}/>
                      </div> 
                    </div> 
                    <Search value={query} onChange={onChange}  onSubmit={onSubmit} title={title} subtitle={subtitle} keyword={keyword} errors={errors} />
                    </React.Fragment> 
                )
           
            }
            
        
   
         }
     } 
     
   
  