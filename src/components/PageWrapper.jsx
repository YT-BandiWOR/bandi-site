import React from 'react';
import classes from "./Wrappers.module.scss";

const PageWrapper = ({children}) => {
    return (
        <div className={classes.PageWrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;