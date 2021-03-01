import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    logout = ()=>{
        localStorage.clear();
        this.props.setUser(null);
    }
   
    render() { 
        let profile, buttons;
        if(localStorage.getItem('token')){
            buttons=
            (                
                <div>
                     <Link class="nav-link" to="/"  onClick={this.logout}>Logout</Link> 
                </div>                
            )
            profile=
            (
                <div class="form-inline" >
                    <Link class="nav-link" to="/profile">Profile</Link>
                    <Link class="nav-link" to="/reset">Change Password</Link>
                </div>                                                        
            )
        }else{
            buttons=
            (
                <div class="form-inline my-2 my-lg-0">
                        <Link class="nav-link" to="/login">Login</Link> 
                        <Link class="nav-link" to="/register">Register</Link> 
                </div>
            )                                                    
        }      
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <Link class="navbar-brand" to="/">E-Commerce</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                {profile}
                            </li>                                                                                  
                        </ul>                        
                    </div>                    
                       {buttons}                                            
                </nav>
            </div>
        );
    }
}
export default Nav;
