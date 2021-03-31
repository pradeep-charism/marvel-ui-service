import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Checkbox, FormControlLabel, FormGroup, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {ProfileImage} from "../../../../components";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

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

export default function CenteredGrid() {
    const classes = useStyles();
    const handleChange = (event) => {
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <div className="row">
                            <div className="col-sm-3 mb-4">
                                <TextField
                                    variant="outlined"
                                    id="studentName"
                                    name="studentName"
                                    label="Student Name"
                                    fullWidth
                                />
                            </div>
                            <div className="col-sm-2 mb-3">
                                <TextField
                                    variant="outlined"
                                    id="lastName"
                                    name="lastName"
                                    label="NRIC"
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
                        </div>
                        <div className="row">
                            <div className="col-sm-3 mb-2">
                                <TextField
                                    variant="outlined"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    onChange={(e) => {
                                        this.inputChange(e)
                                    }}
                                />
                            </div>
                            <div className="col-sm-2">
                                <TextField
                                    variant="outlined"
                                    id="telephone"
                                    name="telephone"
                                    label="Contact Number"
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

                    </Paper>
                </Grid>
                <Grid item xs={3}>

                    <ProfileImage/>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedA" color="primary"/>}
                                label="Swimming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedB" color="primary"/>}
                                label="Dancing"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedA" color="primary"/>}
                                label="Swimming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedB" color="primary"/>}
                                label="Dancing"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedA" color="primary"/>}
                                label="Swimming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedB" color="primary"/>}
                                label="Dancing"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedA" color="primary"/>}
                                label="Swimming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedB" color="primary"/>}
                                label="Dancing"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedA" color="primary"/>}
                                label="Swimming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedB" color="primary"/>}
                                label="Dancing"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedA" color="primary"/>}
                                label="Swimming"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChange} name="checkedB" color="primary"/>}
                                label="Dancing"
                            />
                        </FormGroup>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
