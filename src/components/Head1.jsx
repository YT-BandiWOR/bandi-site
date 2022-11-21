import React from 'react';

const Head1 = ({children}) => {
    return (
        <div>
            <h1 align={"center"}>{children}</h1>
            <hr/>
            <div style={{paddingBottom: "1rem"}}/>
        </div>
    );
};

export default Head1;