import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Confirmation from '../screens/Confirmation';
import {AuthContext} from '../context/auth';
import {getStore} from '../utils';
import StudentRegistration from "../screens/Register/components/register/StudentRegistration";
import StudentRegistrationMain from "../screens/Register/components/RightContent/StudentRegistrationMain";

function AuthenticatedRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => getStore('user') ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
}

class Navigation extends Component {
    render() {
        return (
            <AuthContext.Provider>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/simple" component={StudentRegistrationMain}/>
                        <Route path="/student" component={StudentRegistration}/>
                        <Route path="/confirm" component={Confirmation}/>
                        <AuthenticatedRoute exact path='/home' component={Home}/>
                        <Route path='*' component={Login}/>
                    </Switch>
                </Router>
            </AuthContext.Provider>
        )
    }
}

export default Navigation;
