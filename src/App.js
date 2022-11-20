import React, { useEffect } from 'react';

import './App.css';
import { createCanvas } from './components/three-js';
import R3f from './components/React3Fiber';

function App() {
    useEffect(() => {
        createCanvas();
    }, []);

    return (
        <section className="App">
            <div id="quad1" className="quad">
                <div className="title">three.js</div>
            </div>
            <div id="quad2" className="quad">
                <div className="title">{`<PLACEHOLDER>`}</div>
            </div>
            <div id="quad3" className="quad">
                <R3f style={{ height: '100vh' }} />
                <div className="title">@react-three/fiber</div>
            </div>
            <div id="quad4" className="quad">
                <div className="title">{`<PLACEHOLDER>`}</div>
            </div>
        </section>
    );
}

export default App;
