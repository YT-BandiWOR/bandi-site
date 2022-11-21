import React from 'react';
import classes from "../App.module.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.Header}>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/account">Account</Link>
            <Link to="/settings">Settings</Link>
        </header>
    );
};

export default Header;