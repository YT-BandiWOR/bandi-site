import React from 'react';

const Content = ({children}) => {
    return (
        <div style={{margin: "1rem", padding: "1rem", background: "rgba(0,0,0, 0.2)", borderRadius: 7}}>
            {children}
        </div>
    );
};

export default Content;