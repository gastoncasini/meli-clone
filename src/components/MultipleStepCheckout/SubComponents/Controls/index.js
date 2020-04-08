import React from "react";

export function Controls({ step, max, control, helper }) {
  function next() {
    if (step === null) {
      control(2);
      return;
    }

    if (step < max) {
      control(step + 1);
    }
  }
  function prev() {
    control(step - 1);
  }

  if (step === max) {
    return (
      <div className="controls">
        <button className="controls__button" onClick={prev}>
          Anterior
        </button>
        <button className="controls__button" onClick={helper}>
          PAGAR
        </button>
      </div>
    );
  }

  if (step > 1) {
    return (
      <div className="controls">
        <button className="controls__button" onClick={prev}>
          Anterior
        </button>
        <button className="controls__button" onClick={next}>
          Siguiente
        </button>
      </div>
    );
  }

  return (
    <div className="controls">
      <button className="controls__button" onClick={next}>
        Siguente
      </button>
    </div>
  );
}
