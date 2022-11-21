import React from 'react';

const Head1 = ({children}) => {
    return (
        <>
            <h1 align={"center"}>{children}</h1>
            <hr/>
            <div style={{paddingBottom: "1rem"}}/>
        </>
    );
};

export default Head1;