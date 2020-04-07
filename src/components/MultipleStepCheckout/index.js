import React, { useState } from "react";
import { ItemListWithTotal } from "./SubComponents/ItemList";
import { ProgressBar } from "./SubComponents/ProgressBar";
import { Controls } from "./SubComponents/Controls";
import { SelectDeliveryAddress } from "./SubComponents/SelectDeliveryAddress";
import { SelectPaymentMethod } from "./SubComponents/SelectPaymentMethod";

export default function MultipleStepCheckout() {
  let [currentStep, setStep] = useState(1);
  let [address, setAddress] = useState({
    locallity: "",
    street: "",
    streetNumber: "",
    zipCode: "",
  });
  let [card, setCardDetails] = useState({
    name: "",
    number: "",
    expiration: "",
    code: "",
  });

  function onAddresChange(e) {
    let mapFields = {
      localidad: "locallity",
      calle: "street",
      altura: "streetNumber",
      codigo: "zipCode",
    };

    let { value, name } = e.target;
    let newAddress = { ...address };
    newAddress[mapFields[name]] = value;

    setAddress(newAddress);
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

    console.log(value, name);
    setCardDetails(newCard);
  }

  return (
    <div className="ms-checkout">
      <ProgressBar progress={currentStep} />
      <ItemListWithTotal hidden={currentStep !== 1} />
      <SelectDeliveryAddress
        hidden={currentStep !== 2}
        userAddresses={["", "", "+"]}
        data={address}
        handleChange={onAddresChange}
      />

      <SelectPaymentMethod
        hidden={currentStep !== 3}
        userPaymentMethods={["", "", "+"]}
        data={card}
        handleChange={onCardChange}
      />

      <Controls step={currentStep} max={3} control={setStep} />
    </div>
  );
}
