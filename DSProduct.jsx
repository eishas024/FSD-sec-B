import React, { useState } from "react";

function DSProduct() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(300);

  return (
    <div>
      <h2>DSProduct</h2>

      <img
        src="https://images.pexels.com/photos/2649841/pexels-photo-2649841.jpeg?cs=srgb&dl=pexels-jose-almeida-999955-2649841.jpg&fm=jpg"
        alt="Product"
        height={height}
        width={width}
        style={{ objectFit: "cover" }}
      />

      <br/><br />

      <button onClick={() => setHeight(height + 20)}>
        Enhance Height
      </button>

      <button onClick={() => setWidth(width + 20)}>
        Enhance Width
      </button>
    </div>
  );
}

export default DSProduct;