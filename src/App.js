import React, { useEffect } from 'react';

import './App.css';
import { createCanvas } from './components/three-js';
import R3f from './components/React3Fiber';

function App() {
    useEffect(() => {
        // createCanvas();
    }, []);

    return (
        <React.Fragment>
            <div className="App">
                <R3f style={{ height: '100vh' }} />
            </div>
        </React.Fragment>
    );
}

export default App;
