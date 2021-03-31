import React, {Component} from 'react';
import {Divider, ProfileImage} from '../../components';
import RightContent from './components/RightContent';
import StudentRegistrationMain from "./components/RightContent/StudentRegistrationMain";
import {Container, CssBaseline} from "@material-ui/core";
import CenteredGrid from "./components/RightContent/CenteredGrid";

export class Register extends Component {
    render() {
        return (
            <div className="row">
                <ProfileImage/>
                <Divider/>
                <RightContent/>
            </div>

        // <React.Fragment>
        //     <CssBaseline />
        //     <Container fixed>
        //         <CenteredGrid/>
        //
        //     </Container>
        // </React.Fragment>
        )
    }
}

export default Register;
