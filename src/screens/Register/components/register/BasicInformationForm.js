import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function BasicInformationForm() {
    const [state, setState] = useState({
        basic: {
            firstName: '',
            lastName: '', fatherName: '', address: '', email: '', city: '', country: '', region: '', zip: '',
            gender: ''
        }
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
        console.log(state)
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleChange}
                        value={state.basic.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleChange}
                        value={state.basic.lastName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="fatherName"
                        name="fatherName"
                        label="Father's Name"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.fatherName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.address}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.city}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="region"
                        name="region"
                        label="State/Province/Region"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.region}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.zip}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        onChange={handleChange}
                        value={state.basic.country}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
