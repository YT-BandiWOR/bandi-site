import React from 'react';
import classes from "../App.module.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.Header}>
            <Link to="/">Домой</Link>
            <Link to="/create">Создать</Link>
            <Link to="/account">Аккаунт</Link>
            <Link to="/settings">Настройки</Link>
            {/* eslint-disable-next-line no-restricted-globals */}
            <button onClick={print} style={{fontSize: "3rem"}}>Печать</button>
        </header>
    );
};

export default Header;