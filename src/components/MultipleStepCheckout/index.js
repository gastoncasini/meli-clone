import React, { useState } from "react";
import Modal from "react-modal";
import { ItemListWithTotal } from "./SubComponents/ItemList";
import { Controls } from "./SubComponents/Controls";
import { SelectPaymentMethod } from "./SubComponents/SelectPaymentMethod";
import "./styles.css";

export default function MultipleStepCheckout() {
  let [currentStep, setStep] = useState(1);

  let [card, setCardDetails] = useState({
    name: "gaston emiliano casini",
    number: "120182r182r8093",
    expiration: "22/22",
    code: "723",
  });

  let [prosessing, setProsessing] = useState(false);

  function ProcessPayment() {
    console.log(card);
    setProsessing(true);
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
      <ItemListWithTotal hidden={currentStep !== 1} />
      <SelectPaymentMethod
        hidden={currentStep !== 2}
        data={card}
        handleChange={onCardChange}
      />
      <Controls
        step={currentStep}
        max={2}
        control={setStep}
        helper={ProcessPayment}
      />
    </div>
  );
}
