import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

const App = () => {

  return (
    <div className="app">
      <h1>CSS IRL</h1>
      <div className="demos">

        <div className="demo flexbox-bed">
          <div className="frame">
            <div className="blanket">
              <div className="mattress">
              </div>
            </div>
            <div className="pillows">
              <span className="pillow"></span>
              <span className="pillow"></span>
              <span className="pillow"></span>
              <span className="pillow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
