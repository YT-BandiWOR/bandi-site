import React from 'react';

const UnderHead = ({children}) => {
    return (
        <>
            <h3 style={{color: "rgba(155, 155, 150, 0.7)"}} align={"center"}>{children}</h3>
            <div style={{paddingBottom: "2rem"}}/>
        </>
    );
};

export default UnderHead;