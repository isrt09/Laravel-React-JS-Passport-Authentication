import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Reset from '../components/Reset';
import Forget from '../components/Forget';
import Profile from '../components/Profile';
import axios from 'axios';

class Header extends React.Component {       

    state={
        user:{}
    }

    componentDidMount(){
        axios.get('user')
        .then((response)=> {              
            this.setUser(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    setUser=(user)=>{
        this.setState({user:user})
    }
    render() {
        return (
            <Router>
                <div>
                    <Nav user={this.state.user} setUser={this.setUser} />
                    <Link to=""></Link>
                    <Switch>
                        <Route exact path="/"         component={Home} ></Route>
                        <Route exact path="/login"    component={()=> <Login    user={this.state.user} setUser={this.setUser} /> } ></Route>
                        <Route exact path="/register" component={()=> <Register user={this.state.user} setUser={this.setUser} /> } ></Route>
                        <Route exact path="/reset"    component={Reset} ></Route>
                        <Route exact path="/forget"   component={Forget} ></Route>
                        <Route exact path="/profile"  component={() =><Profile  user={this.state.user} setUser={this.setUser}  /> }></Route>
                    </Switch>
                </div>
            </Router>            
        );
    }
}

export default Header;

