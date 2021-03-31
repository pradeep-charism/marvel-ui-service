import React from 'react';
import './style.css';
import {makeStyles} from "@material-ui/core/styles";
import StudentsMenuBar from "../../screens/Menu/StudentsMenuBar";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <StudentsMenuBar/>
    );
}
