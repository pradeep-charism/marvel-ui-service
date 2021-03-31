import React, {Component} from 'react';
import './style.css';
import {Grid, TextField, Typography, Container} from "@material-ui/core";


import CssBaseline from '@material-ui/core/CssBaseline';

export default function StudentRegistrationMain() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                    <Typography variant="h6" gutterBottom/>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
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
                            />
                        </Grid>

                    </Grid>
            </Container>
        </React.Fragment>
    );
}