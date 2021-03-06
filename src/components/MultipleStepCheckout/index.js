import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card";
import ItemListWithTotal from "./SubComponents/ItemList";
import Button from "../../components/Button";
import SelectPaymentMethod from "./SubComponents/SelectPaymentMethod";
import "./styles.css";

function ProcessingStateDisplay({ processing, resolve }) {
  let [state, setState] = useState("processing");
  let message = "";
  let icon = "";
  let container = "";
  let messageClass = "";
  let iconClass = "";

  useEffect(() => {
    //emulates a response from backend service
    let t = setTimeout(() => {
      setState("verified");

      return 1;
    }, 3000);

    let b = setTimeout(() => {
      resolve();
      return 2;
    }, 6000);

    if (state === "verified") {
      return () => {
        clearTimeout(t);
        clearTimeout(b);
      };
    }
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

function MultipleStepCheckout({ order }) {
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
  let [processing, setProcessing] = useState(false);
  let [currentStep, setStep] = useState(null);
  let [card, setCardDetails] = useState({
    name: "gaston emiliano casini",
    number: "120182r182r8093",
    expiration: "22/22",
    code: "723",
  });

  // payment processing
  function ProcessPayment() {
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

  // step controler

  function nextStep() {
    if (currentStep === 2) {
      console.log("pagando");
    } else {
      setStep(2);
    }
  }
  function prevStep() {
    if (currentStep === 2) {
      setStep(1);
    }
  }

  let bottomButtonTxt =
    currentStep === 2 ? "Pagar Ahora" : "Seleccionar Metodo de Pago";

  // step container classes

  let stepTitle =
    currentStep === 1 || currentStep === null
      ? "productos y direccion de envio"
      : "medio de pago";

  let class1 = "";
  let class2 = "";

  /* animation handler */
  switch (currentStep) {
    case 1:
      class1 = "ms-checkout__step ms-checkout__step--slide-in-lf";
      class2 = "ms-checkout__step ms-checkout__step--slide-out-rg";
      break;

    case 2:
      class1 = "ms-checkout__step ms-checkout__step--slide-out-lf";
      class2 = "ms-checkout__step ms-checkout__step--slide-in-rg";
      break;
    default:
      class1 = "ms-checkout__step ";
      class2 = "ms-checkout__step ms-checkout__step--hidden ";
  }

  // shows empty card if there aren't any products in the cart

  if (!order[0]) {
    return (
      <section className="ms-checkout">
        <div className="ms-checkout__step ms-checkout__step--empty">
          <Card>tu carrito esta vacio </Card>
        </div>
      </section>
    );
  }

  //checkout shoppig-cart

  return (
    <section className="ms-checkout">
      <header className="ms-checkout__header">
        <h2 className="ms-checkout__subtitle">{stepTitle}</h2>
        <Button
          innerHTML="volver atras"
          className="button--small button--cian-light button--lowercase"
          clickHandler={prevStep}
        />
      </header>
      <div className={class1 + " ms-checkout__step--2-cols"}>
        <ItemListWithTotal />
      </div>
      <div className={class2}>
        <SelectPaymentMethod data={card} handleChange={onCardChange} />
      </div>
      <div className="ms-checkout__button-container">
        <Button
          innerHTML={bottomButtonTxt}
          clickHandler={currentStep === 2 ? ProcessPayment : nextStep}
          className={"button--success-bold button--capitalize"}
        />
      </div>

      <Modal style={ModalStyles} isOpen={processing}>
        <ProcessingStateDisplay processing={processing} resolve={toggleModal} />
      </Modal>
    </section>
  );
}

function mapStateToProps({ user }) {
  return { order: user.order.items };
}

export default connect(mapStateToProps)(MultipleStepCheckout);
