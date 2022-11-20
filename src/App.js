import React, { useEffect } from 'react';

import './App.css';
import { createCanvas } from './components/three-js';
import R3f from './components/React3Fiber';

function App() {
    useEffect(() => {
        // createCanvas();
    }, []);

    return (
        <div className="App">
            <R3f />
        </div>
    );
}

export default App;
