import React from "react";
import "./styles.css";
function Cube({ info }) {
  return (
    <div className="cube">
      <p className="cube__info">{info}</p>
    </div>
  );
}

export function SelectionCubes({ cubes }) {
  cubes = cubes ? cubes : ["+"];

  return (
    <div className="selection-cubes">
      {cubes.map((cube) => (
        <Cube info={cube} />
      ))}
    </div>
  );
}
