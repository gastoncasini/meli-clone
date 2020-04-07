import React from "react";

export function ProgressBar({ progress }) {
  const processes = ["verificar pedido", "datos de envio", "metodo de pago"];

  return (
    <ul className="progressbar">
      {processes.map((process, i) => {
        let active = i + 1 <= progress ? "active" : "";

        return <li className={active}>{process}</li>;
      })}
    </ul>
  );
}
