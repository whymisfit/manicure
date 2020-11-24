import React from 'react';

import Header from "./components/header/header";
import Hero from "./components/hero/hero";

import './App.css';
import Content from "./components/content/content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Content/>
        </div>
    );
}

export default App;