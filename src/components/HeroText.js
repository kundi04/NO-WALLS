import React from "react";
import '../App.css'



function HeroText() {
  return (
    <>
      <div className="htext">
        <h1 className="display-4 ">Innovative. Unorthodox.</h1>
        <h3 className="fw-normal mt-3">
          We're <span className="no-walls">Nowalls</span> PanAfrica.
        </h3>
        <div className="d-flex mt-4">
          <hr className="line_a me-3" style={{ width: '60px', height: '4px', backgroundColor: 'rgba(205, 126, 80, 1)' }} />
          <p className="fw-bold ">Main website coming soon</p>
        </div>
      </div>
    </>
  );
}

export default HeroText;
