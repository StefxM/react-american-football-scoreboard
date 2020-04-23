import React from "react";
import "./App.css";
// import App from "./App";

const BottomRow = () => {
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">UpperCut</h3>
        <div className="down__value"><span>0</span></div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Shootstyle</h3>
        <div className="toGo__value"><span>0</span></div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Grenade</h3>
        <div className="ballOn__value"><span>0</span></div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Explode</h3>
        <div className="quarter__value"><span>0</span></div>
      </div>
    </div>
  );
};

export default BottomRow;
