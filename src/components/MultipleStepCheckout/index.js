import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemListWithTotal } from "./SubComponents/ItemList";
import { Controls } from "./SubComponents/Controls";
import { SelectPaymentMethod } from "./SubComponents/SelectPaymentMethod";
import "./styles.css";

function ProcessingStateDisplay({ processing, resolve }) {
  let [state, setState] = useState("processing");
  let message = "";
  let icon = "";
  let container = "";
  let messageClass = "";
  let iconClass = "";
  useEffect(() => {
    setTimeout(() => {
      setState("error");
    }, 3000);

    setTimeout(() => {
      resolve();
    }, 6000);
  }, [state]);

  switch (state) {
    case "processing":
      message = "Procesando su pago ";
      icon = "spinner";
      messageClass = "processing__msg";
      iconClass = "processing__msg__icon fa-pulse";
      break;

    case "error":
      message = "Hubo un error con su pago ";
      icon = "times";
      container = "processing processing--error";
      messageClass = "processing__msg processing__msg--err-anim";
      iconClass = "processing__msg__icon";
      break;
    case "verified":
      message = "Pago realizado con exito!  ";
      icon = "check";
      container = "processing processing--verified";
      messageClass = "processing__msg processing__msg--ver-anim";
      iconClass = "processing__msg__icon";
      break;
    default:
  }

  return (
    <div className={container}>
      <div className={messageClass}>
        <h1 className="processing__msg__info">{message}</h1>
        <FontAwesomeIcon icon={icon} className={iconClass} />
      </div>
    </div>
  );
}

export default function MultipleStepCheckout() {
  // Modal config

  Modal.setAppElement("#root");

  const ModalStyles = {
    content: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      inset: 0,
      padding: "0",
    },
  };

  function toggleModal() {
    setProcessing(!processing);
  }

  // state init

  let [currentStep, setStep] = useState(null);
  let [card, setCardDetails] = useState({
    name: "gaston emiliano casini",
    number: "120182r182r8093",
    expiration: "22/22",
    code: "723",
  });
  let [processing, setProcessing] = useState(false);

  // step container animation dinamic classes

  let class1 = "";
  let class2 = "";

  /* animation handler */
  switch (currentStep) {
    case null:
      class1 = "ms-checkout__step ";
      class2 = "ms-checkout__step ms-checkout__step--hidden ";
      break;

    case 1:
      class1 = "ms-checkout__step ms-checkout__step--slide-in-lf";
      class2 = "ms-checkout__step ms-checkout__step--slide-out-rg";
      break;

    case 2:
      class1 = "ms-checkout__step ms-checkout__step--slide-out-lf";
      class2 = "ms-checkout__step ms-checkout__step--slide-in-rg";
      break;
    default:
  }

  function ProcessPayment() {
    console.log(card);
    setProcessing(true);
  }

  function onCardChange(e) {
    let mapFields = {
      nombre: "name",
      numero: "number",
      vencimiento: "expiration",
      cvv: "code",
    };

    let { value, name } = e.target;
    let newCard = { ...card };
    newCard[mapFields[name]] = value;

    setCardDetails(newCard);
  }

  return (
    <div className="ms-checkout">
      <div className={class1}>
        <ItemListWithTotal />
      </div>
      <div className={class2}>
        <SelectPaymentMethod data={card} handleChange={onCardChange} />
      </div>

      <Controls
        step={currentStep}
        max={2}
        control={setStep}
        helper={ProcessPayment}
      />

      <Modal style={ModalStyles} isOpen={processing}>
        <ProcessingStateDisplay processing={processing} resolve={toggleModal} />
      </Modal>
    </div>
  );
}
