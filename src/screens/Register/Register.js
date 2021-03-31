import React, {Component} from 'react';
import {Divider, ProfileImage} from '../../components';
import RightContent from './components/RightContent';
import StudentRegistrationMain from "./components/RightContent/StudentRegistrationMain";
import {Container, CssBaseline} from "@material-ui/core";
import CenteredGrid from "./components/RightContent/CenteredGrid";

export class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <ProfileImage/>
                <RightContent/>
            </React.Fragment>



            // <CssBaseline />
            // <Container fixed>
            //     <div className="row">
            //     <CenteredGrid/>
            //     </div>
            // </Container>

        )
    }
}

export default Register;
