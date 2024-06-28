import { useState } from "react";
import "./App.css";
import "./Switch.css";
import HAAS from "./assets/HAASDP-dark.png";
import HAASW from "./assets/HAASDP-light.png";
function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (checked) {
      document.body.style.backgroundColor = "#e4e4e4";
    } else {
      document.body.style.backgroundColor = "#000";
    }
  };
  return (
    <>
      <div className="parent">
        <label className="switch">
          <input type="checkbox" onClick={handleChange} />
          <span className="slider round"></span>
        </label>
      </div>

      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked ? (
          <img
            src={HAASW}
            className="logo"
            alt="HAAS Design Products Dark Logo"
          />
        ) : (
          <img
            src={HAAS}
            className="logo"
            alt="HAAS Design Products White Logoo"
          />
        )}
      </div>

      {checked ? (
        <div>
          <h2 style={{ color: "white" }}>Coming Soon</h2>
          <p style={{ color: "white" }}>
            {" "}
            For more information, email{" "}
            <a href="mailto:info@haasdesignproducts.com">
              info@haasdesignproducts.com
            </a>{" "}
          </p>{" "}
        </div>
      ) : (
        <div>
          <h2 style={{ color: "black" }}> Coming Soon</h2>
          <p style={{ color: "black" }}>
            {" "}
            For more information, email{" "}
            <a href="mailto:info@haasdesignproducts.com">
              info@haasdesignproducts.com
            </a>{" "}
          </p>{" "}
        </div>
      )}
    </>
  );
}

export default App;
