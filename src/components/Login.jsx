import axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class Login extends React.Component { 

    state={
        email:'',
        password:'',
        message:''
    }

    //after form submit
    formSubmit  = (e) =>{
        e.preventDefault();
        const data={
            email:this.state.email,
            password:this.state.password
        }

        axios.post('login', data)
          .then((response)=> {
                localStorage.setItem('token',response.data.token);       //token store on local storage
                this.setState({
                    loggedIn:true
                })
                this.props.setUser(response.data.user);
          })
          .catch( (error) => {
              console.log(error);
          });
    } 
    
    render() {
       if(this.state.loggedIn){
           return <Redirect to={'/profile'}/>
       }

       if(localStorage.getItem('token')){
            return <Redirect to="/profile" />
        }
        return (            
            <div class="container">
                <div class="row py-4">            
                    <div class="jumbotron col-lg-8 offset-lg-2 my-3">
                    <h3 class="text-center"><b>LOGIN ACCOUNT</b></h3>
                    <form onSubmit={this.formSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1"><b>Email Address</b></label>
                            <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={ (e)=>{this.setState({email:e.target.value})} } />                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"><b>Password</b></label>
                            <input type="password" class="form-control" name="password" id="exampleInputPassword1" required onChange={ (e)=>{this.setState({password:e.target.value})} }/>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-success btn-block mb-3">Submit</button>
                        <span id="emailHelp" class="form-text">I don't have an Account &nbsp; <Link to="/register">Click here</Link></span>  
                        <span id="emailHelp" class="form-text">Forget Password &nbsp; <Link to="/forget">Click here</Link></span>  
                    </form>
                    </div>                    
                </div>                       
            </div>
        );
    }
}
export default Login;
