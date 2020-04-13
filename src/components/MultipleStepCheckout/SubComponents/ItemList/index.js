import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Card from "../../../Card";
import { SetDeliveryAddress } from "../SetDeliveryAddress";

function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map(({ item, quantity }) => {
        console.log(item);
        return (
          <Card>
            <li className="item-list__item">
              <img src={item.image} alt="" className="item__img" />

              <div className="item__info">
                <div className="item__info__top">{item.name}</div>
                <div className="item__info__bottom">
                  <div className="">{quantity}</div>
                  <div className="">{`$ ${item.price}`}</div>
                </div>
              </div>
            </li>
          </Card>
        );
      })}
    </ul>
  );
}

function Delivery() {
  let [open, setOpen] = useState(false);

  let [address, setAddress] = useState({
    locallity: "Caba  ",
    street: "Calle falsa",
    streetNumber: "123",
    zipCode: "1040"
  });

  function onAddresChange(e) {
    let mapFields = {
      localidad: "locallity",
      calle: "street",
      altura: "streetNumber",
      codigo: "zipCode"
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
      boxShadow: " 0px 2px 10px lightgray"
    }
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

function Total({ items, total }) {
  items = items ? items : [];

  return (
    <Card>
      <Delivery />
      <hr />
      <div className="info-block">
        {items.map(({ item, quantity }) => (
          <div className="info-block__field-container">
            <p className="info-block__field">{`${item.name} x ${quantity}`}</p>

            <p className="info-block__value">{`$ ${item.price * quantity}`}</p>
          </div>
        ))}

        <hr />
        <div className="info-block__field-container info-block__field-container--dark">
          <h2 className="info-block__field">Total:</h2>
          <p className="info-block__value">{`$ ${total}`}</p>
        </div>
      </div>
    </Card>
  );
}

function ItemListWithTotal({ items, total }) {
  return (
    <>
      <ItemList items={items} />
      <Total items={items} total={total} />
    </>
  );
}

function mapStateToProps({ user }) {
  return {
    items: user.order.items,
    total: user.order.total
  };
}

export default connect(mapStateToProps)(ItemListWithTotal);
