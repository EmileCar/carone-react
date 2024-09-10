import React from "react";
import "./Spinner.css";

interface LoadingSpinnerProps {
  color?: string;
  size?: number;
  text?: string | JSX.Element;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color,
  size,
  text,
}) => {
  const spinnerColor = color || "#1576D1";
  const spinnerSize = size ? `${size}px` : "60px";

  return (
    <div className="spinner-container">
      <div
        className="spinner"
        style={{ height: spinnerSize, width: spinnerSize }}
      >
        <svg
          version="1.1"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 337.3 346.9"
          fill={spinnerColor}
        >
          <g id="Layer_1-2">
            <g id="Layer_2-2">
              <g id="Layer_1-2">
                <path
                  className="st0"
                  d="M168.6,46.9V0C75.1,1.6,0,77.9,0,171.5v2h42.1C42.1,103.6,98.7,46.9,168.6,46.9z"
                />
                <path
                  className="st0"
                  d="M168.6,300v46.9c93.6-1.6,168.6-77.9,168.6-171.4v-2h-42.1C295.2,243.4,238.5,300,168.6,300z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      {text && <div style={{ fontStyle: "italic" }}>{text}</div>}
    </div>
  );
};

export default LoadingSpinner;