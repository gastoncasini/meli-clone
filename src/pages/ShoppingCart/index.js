import React, { useState } from "react";
import Card from "../../components/Card";
import InputBlock, { DoubleInputBLock } from "../../components/InputBlock";
import "./styles.css";

function ProgressBar({ progress }) {
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

function Controls({ step, control }) {
  function next() {
    control(step + 1);
  }
  function prev() {
    control(step - 1);
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

function ItemList() {
  return (
    <ul className="item-list">
      <Card>
        <li className="item-list__item">
          <img
            src="https://via.placeholder.com/50x50"
            alt=""
            className="item__img"
          />

          <div className="item__info">
            <div className="item__info__top">Producto 1</div>
            <div className="item__info__bottom">
              <div className="">1</div>
              <div className="">$ 100</div>
            </div>
          </div>
        </li>
      </Card>
      <Card>
        <li className="item-list__item">
          <img
            src="https://via.placeholder.com/50x50"
            alt=""
            className="item__img"
          />
          <div className="item__info">
            <div className="item__info__top">Producto 2</div>

            <div className="item__info__bottom">
              <div className="">1</div>
              <div className="">$ 100</div>
            </div>
          </div>
        </li>
      </Card>
    </ul>
  );
}

function Total() {
  return (
    <Card>
      <div className="info-block">
        <div className="info-block__field-container">
          <p className="info-block__field">producto 1 x 1</p>

          <p className="info-block__value">$99</p>
        </div>
        <div className="info-block__field-container">
          <p className="info-block__field">producto 2 x 2</p>

          <p className="info-block__value">$99</p>
        </div>
        <hr />
        <div className="info-block__field-container info-block__field-container--dark">
          <h2 className="info-block__field">Total:</h2>
          <p className="info-block__value">$99</p>
        </div>
      </div>
    </Card>
  );
}

//

function MultipeStepForm() {
  const [currentStep, setStep] = useState(1);
  const steps = [Step1, Step2, Step3];

  function Step({ step, children }) {
    function animationHandler() {
      let helpers = "";
      if (step === currentStep) {
        helpers = "ms-form__step--front slide-in";
      } else {
        helpers = "ms-form__step--hidden";
      }
      return `ms-form__step ${helpers}`;
    }
    const classes = animationHandler();

    return (
      <fieldset className={classes}>
        {children}
        <Controls step={currentStep} control={setStep} />
      </fieldset>
    );
  }

  function Step1() {
    return (
      <Step step={1}>
        <legend>Pedido</legend>
        <ItemList />
        <Total />
      </Step>
    );
  }

  function Step2() {
    return (
      <Step step={2}>
        <Card>
          <legend>datos de envio</legend>
          <InputBlock {...inputs[0]} />
          <InputBlock {...inputs[1]} />
          <InputBlock {...inputs[2]} />
          <DoubleInputBLock />
        </Card>
      </Step>
    );
  }

  function Step3() {
    return (
      <Step step={3}>
        <Card>
          <legend>datos de pago</legend>
          <InputBlock {...inputs2[0]} />
          <InputBlock {...inputs2[1]} />

          <DoubleInputBLock inputs={inputs2[2]} />
        </Card>
      </Step>
    );
  }

  // temporal
  let inputs = [
    {
      name: "Provincia",
      type: "text"
    },
    {
      name: "Localidad",
      type: "text"
    },
    {
      name: "calle",
      type: "text"
    }
  ];

  let inputs2 = [
    {
      name: "Nombre",
      type: "text"
    },
    {
      name: "numero de tarjeta",
      type: "text"
    },

    [
      {
        name: "Vencimiento",
        type: "text"
      },
      {
        name: "cod. seg.",
        type: "text"
      }
    ]
  ];

  return (
    <div className="ms-form">
      <ProgressBar progress={currentStep} />
      {steps.map(fielset => fielset())}
    </div>
  );
}

export default function ShoppingCart() {
  return <MultipeStepForm />;
}
