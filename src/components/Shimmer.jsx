import React from "react";
import "./Shimmer.css";
function Shimmer() {
  const ar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="shimmermain">
      {ar.map((shim) => (
        <h1 className="shim"></h1>
      ))}
    </div>
  );
}

export default Shimmer;
