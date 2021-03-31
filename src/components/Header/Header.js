import React from 'react';
import './style.css';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="absolute" color="default" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Marvel Students Planner
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
