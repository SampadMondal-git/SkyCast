import React from "react";

function Temperature() {
  return (
    <>
      <style>
        {`
/* From Uiverse.io by MuhammadHasann */ 
.toggle-cont {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  position: relative;
  --active-color: linear-gradient(135deg, #ff6b6b 0%, #f43f5e 100%);
  --inactive-bg: #1f2937;
}

.toggle-input {
  display: none;
}

.toggle-label {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  background: var(--inactive-bg);
  border-radius: 9999px;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  transition: background 0.3s ease;
}

.cont-label-play {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
  height: 40px;
  background: var(--active-color);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.temp-unit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  transition: opacity 0.3s ease;
}

.fahrenheit {
  opacity: 0;
}

/* Checked states */
.toggle-input:checked + .toggle-label .cont-label-play {
  transform: translateX(32px);
}

.toggle-input:checked + .toggle-label .celsius {
  opacity: 0;
}

.toggle-input:checked + .toggle-label .fahrenheit {
  opacity: 1;
}

/* Hover effects */
.toggle-label:hover .cont-label-play {
  transform: scale(1.05);
}

.toggle-input:checked + .toggle-label:hover .cont-label-play {
  transform: translateX(32px) scale(1.05);
}

/* Active state animation */
.toggle-label:active .cont-label-play {
  transform: scale(0.95);
}

.toggle-input:checked + .toggle-label:active .cont-label-play {
  transform: translateX(32px) scale(0.95);
}

/* Glow effect when active */
.toggle-input:checked + .toggle-label .cont-label-play {
  box-shadow: 0 0 16px rgba(244, 63, 94, 0.4),
             0 4px 6px -1px rgba(0,0,0,0.1);
}

/* Optional: Background color transition */
.toggle-input:checked + .toggle-label {
  background: #374151;
}
        `}
      </style>
      <div className="toggle-cont">
        <input type="checkbox" className="toggle-input" id="tempToggle" />
        <label className="toggle-label" htmlFor="tempToggle">
          <span className="cont-label-play">
            <span className="temp-unit celsius">&deg;C</span>
            <span className="temp-unit fahrenheit">&deg;F</span>
          </span>
        </label>
      </div>
    </>
  );
}

export default Temperature;
