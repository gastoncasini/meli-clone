import React, { useState } from "react";
import Modal from "react-modal";
import Card from "../../../Card";
import { SetDeliveryAddress } from "../SetDeliveryAddress";

function ItemList() {
  return (
    <ul className="item-list">
      <Card>
        <li className="item-list__item">
          <img src="https://picsum.photos/50" alt="" className="item__img" />

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
          <img src="https://picsum.photos/50" alt="" className="item__img" />
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

function Delivery() {
  let [open, setOpen] = useState(false);

  let [address, setAddress] = useState({
    locallity: "Caba  ",
    street: "Calle falsa",
    streetNumber: "123",
    zipCode: "1040",
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

  const customStyles = {
    content: {
      width: "90%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "0",
      boxShadow: " 0px 2px 10px lightgray",
    },
  };

  function toggleModal() {
    setOpen(!open);
  }

  return (
    <>
      <Modal isOpen={open} style={customStyles}>
        <SetDeliveryAddress data={address} handleChange={onAddresChange} />
        <button onClick={toggleModal}>cancelar</button>
        <button onClick={toggleModal}>Guardar</button>
      </Modal>
      <div className="info-block">
        <div className="info-block__field-container info-block__field-container--dark">
          <h2 className="info-block__title info-block__title--small info-block__title--bold">
            Envio
          </h2>

          <button className="info-block__edit-button" onClick={toggleModal}>
            edit
          </button>
        </div>

        <div className="info-block__field-container">
          <p className="info-block__field">Gaston Casini</p>
        </div>

        <div className="info-block__field-container">
          <p className="info-block__field">
            {`${address.street} ${address.streetNumber} (CP ${address.zipCode}) `}{" "}
          </p>
        </div>
        <div className="info-block__field-container">
          <p className="info-block__field">{`${address.locallity} - AR`} </p>
        </div>
      </div>
    </>
  );
}

function Total() {
  return (
    <Card>
      <Delivery />
      <hr />
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

export function ItemListWithTotal({ hidden }) {
  let className = hidden
    ? "ms-checkout__step ms-checkout__step--hidden"
    : "ms-checkout__step";

  return (
    <>
      <ItemList />
      <Total />
    </>
  );
}
