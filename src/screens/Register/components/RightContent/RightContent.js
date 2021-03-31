import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreators} from '../../../../actions/profile';
import stateList from '../../../../mock/state.json';
import {formatPhoneNumber, isValidEmail} from '../../../../utils';
import './style.css';
import TextField from '@material-ui/core/TextField';
import {Checkbox, FormControlLabel, FormGroup, MenuItem} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export class RightContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                telephone: '',
                age: 5,
                email: '',
                state: '',
                country: '',
                address: 'Home',
                address1: '',
                address2: '',
                interests: [],
            },
            errors: {
                user: {
                    firstName: 'Enter First Name',
                    telephone: 'Enter Telephone',
                    email: 'Email is not valid!',
                    address1: 'Enter address1',
                    address2: 'Enter address2',
                }
            },
            validForm: false,
            submitted: false
        }
    }

    componentDidMount() {
        if (this.props.profile) {
            this.setState({user: this.props.profile});
            if (this.props.profile.email) {
                this.resetErrorMsg();
            }
        }
    }

    validationErrorMessage = (event) => {
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
                break;
            case 'email':
                errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
                break;
            case 'telephone':
                errors.user.telephone = value.length < 1 && value.length > 10 ? 'Enter valid telephone number' : '';
                break;
            case 'address1':
                errors.user.address1 = value.length < 1 ? `Enter ${this.state.user.address} address1` : '';
                break;
            case 'address2':
                errors.user.address2 = value.length < 1 ? `Enter ${this.state.user.address} address2` : '';
                break;
            default:
                break;
        }

        this.setState({errors});
    }

    inputChange = (event) => {
        let telphone = ''
        const {name, value} = event.target;
        const user = this.state.user;
        if (name === 'telephone') {
            telphone = formatPhoneNumber(value);
            user[name] = telphone;
        } else {
            user[name] = value;
        }
        this.setState({user});
        this.validationErrorMessage(event);
    }

    checkboxChange = (event) => {
        const {name, checked} = event.target;
        const user = this.state.user;
        user[name] = checked;
        this.setState({user});
    }

    onChangeAddress = (event) => {
        const user = this.state.user;
        user['address'] = event.target.value;
        this.setState({user});
    }

    onChangeInputRange = (value) => {
        const user = this.state.user;
        user['age'] = value;
        this.setState({user})
    }

    onSelectedInterest = (value) => {
        const user = this.state.user;
        const errors = this.state.errors;
        user['interests'] = value;
        // errors.user.interests = value.length < 1 ? 'Enter your Interests' : '';
        this.setState({user, errors});
    }

    validateForm = (errors) => {
        let valid = true;
        Object.entries(errors.user).forEach(item => {
            console.log(item)
            item && item[1].length > 0 && (valid = false)
        })
        return valid;
    }

    submitForm = async (event) => {
        this.setState({submitted: true});
        this.props.dispatch(ActionCreators.formSubmittionStatus(true));
        const user = this.state.user;
        if (user && this.props.profile) {
            user.profileImage = this.props.profile.profileImage;
        }
        event.preventDefault();
        if (this.validateForm(this.state.errors) && this.props.profile && this.props.profile.profileImage) {
            console.info('Valid Form')
            this.props.dispatch(ActionCreators.addProfile(user));
            this.props.history.push('/confirm')
        } else {
            console.log('Invalid Form')
        }
        console.log("Adding profile")
        console.log(user)
    }

    resetErrorMsg = () => {
        let errors = this.state.errors;
        errors.user.firstName = ''
        errors.user.telephone = ''
        errors.user.email = ''
        errors.user.address1 = ''
        errors.user.address2 = ''
        errors.user.interests = ''
        this.setState({errors});
    }

    handleChange = (event) => {
    };

    render() {
        const {
            firstName,
            lastName,
            age,
            email,
            telephone,
            state,
            country,
            address,
            address1,
            address2,
            interests,
        } = this.state.user;
        const {submitted} = this.state;
        const listState = stateList.listStates.map((item, key) =>
            <option key={key} value={item.name}>{item.name}</option>
        );


        const genderList = [
            {
                value: 'Male',
                label: 'Male',
            },
            {
                value: 'Female',
                label: 'Female',
            }
        ];

        return (
            <React.Fragment>
                <Paper>
                    <div className="rightPanel">
                        <div className="row">
                            <div className="col-sm-3 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="studentName"
                                    name="studentName"
                                    label="Student Name"
                                    fullWidth
                                />
                                {submitted && this.state.errors.user.firstName.length > 0 &&
                                <span className='error'>{this.state.errors.user.firstName}</span>}
                            </div>
                            <div className="col-sm-3 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="lastName"
                                    name="lastName"
                                    label="NRIC"
                                    fullWidth
                                    value={lastName}
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                            </div>
                            <div className="col-sm-3 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="age"
                                    name="age"
                                    label="Birthday"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                            </div>
                            <div className="col-sm-2 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="gender"
                                    select
                                    label="Gender"
                                    fullWidth
                                >
                                    {genderList.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="firstName"
                                    name="firstName"
                                    label="Parent Name"
                                    fullWidth
                                    value={firstName}
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                                {submitted && this.state.errors.user.firstName.length > 0 &&
                                <span className='error'>{this.state.errors.user.firstName}</span>}
                            </div>
                            <div className="col-sm-3 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="lastName"
                                    name="lastName"
                                    label="NRIC"
                                    fullWidth
                                    value={lastName}
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 mb-2">
                                <TextField
                                    variant="outlined"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                                {submitted && this.state.errors.user.email.length > 0 &&
                                <span className='error'>{this.state.errors.user.email}</span>}
                            </div>
                            <div className="col-sm-3">
                                <TextField
                                    variant="outlined"
                                    id="telephone"
                                    name="telephone"
                                    label="Contact Number"
                                    value={telephone}
                                    fullWidth
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                                {submitted && this.state.errors.user.telephone.length > 0 &&
                                <span className='error'>{this.state.errors.user.telephone}</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 mb-3">
                                <TextField
                                    id="address"
                                    name="address"
                                    label="Address"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    variant="outlined"
                                />
                            </div>
                            <div className="col-sm-3">
                                <div className="mb-3">
                                    <TextField
                                        variant="outlined"
                                        id="district"
                                        name="district"
                                        label="District"
                                        fullWidth
                                    />
                                </div>
                                <TextField
                                    variant="outlined"
                                    id="district"
                                    name="district"
                                    label="Country"
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7 mb-3">
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedA"
                                                           color="primary"/>}
                                        label="Swimming"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedB"
                                                           color="primary"/>}
                                        label="Dancing"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedA"
                                                           color="primary"/>}
                                        label="Swimming"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedB"
                                                           color="primary"/>}
                                        label="Dancing"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedA"
                                                           color="primary"/>}
                                        label="Swimming"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedB"
                                                           color="primary"/>}
                                        label="Dancing"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedA"
                                                           color="primary"/>}
                                        label="Swimming"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedB"
                                                           color="primary"/>}
                                        label="Dancing"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedA"
                                                           color="primary"/>}
                                        label="Swimming"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleChange} name="checkedB"
                                                           color="primary"/>}
                                        label="Dancing"
                                    />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <Button variant="contained" color="primary" onClick={this.submitForm}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.user.profile
    }
}

export default connect(mapStateToProps)(withRouter(RightContent));
