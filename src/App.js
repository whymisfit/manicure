import React from 'react';

import Header from "./components/header/header";
import Hero from "./components/hero/hero";

import './App.css';
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">

            <Header/>
            <Hero/>
            <Content/>

            <Footer />
        </div>
    );
}

export default App;