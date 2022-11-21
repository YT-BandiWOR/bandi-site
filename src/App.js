import React from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import H404 from "./pages/H404";


const App = () => {
    return (
        <div className={classes.App}>
            <Header/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="*" element={<H404/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;