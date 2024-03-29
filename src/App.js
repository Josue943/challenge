import React, { Component } from 'react'
import './App.css';
//router
import {Route,Switch,withRouter} from 'react-router-dom'
//components
import Index from './components/index'
import Report from './components/report'
import Navbar from './components/navbar' 
import Footer from './components/footer'
//services
import { getEmails } from './services/services';

 class App extends Component {
          
  state={
    data:[],
    email:[],
    query:'', 
    errors:'' 
  }

  componentDidMount(){
    const data =  getEmails();
    this.setState({data})
  } 

   onSubmit= e =>{
    e.preventDefault();
    const {data,query} = this.state
    const email = data.find(e => e.email === query);

    if(email){
      localStorage.setItem('email',email.email) 
      this.setState({query:'',errors:''})
      this.setState({email}) 
      this.scroll()
      this.props.history.push('/report') 
    }else{
       const errors = 'Please add a valid email address'
       this.setState({errors})
   }
  
  } 
  
    onChange = e =>{
      this.setState({ query: e.target.value });
    }
     
    scroll = ()=>{
      const elemento = document.querySelector('nav');
      elemento.scrollIntoView('smooth','start')
    }

    getInfo=email=>{
      const {data} = this.state
      return data.find(e => e.email === email);
    }   
   
          
  render() {
   const {query,email,errors} = this.state
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route path="/" exact  render={ () => ( <Index  onSubmit={this.onSubmit} onChange={this.onChange} query={query} errors={errors} />)}/> 
          <Route path="/report" render={ () =>( <Report onSubmit={this.onSubmit} onChange={this.onChange} query={query} email={email} errors={errors} scroll={this.scroll} getInfo={this.getInfo}/>)}/> 
        </Switch>
        <Footer/>
    </React.Fragment>
    )
  }
}

export default withRouter(App);

