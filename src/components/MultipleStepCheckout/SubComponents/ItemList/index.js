import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Card from "../../../Card";
import Button from "../../../Button";
import CustomNumberInput from "../../../CustomNumberInput";
import { SetDeliveryAddress } from "../SetDeliveryAddress";
import { setItemQuantityAction } from "../../../../redux/userDuck";

function ItemList({ items, quantitySetter }) {
  return (
    <ul className="item-list">
      {items.map((itemInfo) => {
        let { item, quantity } = itemInfo;
        return (
          <li>
            <Card>
              <section className="item-list__item">
                <img
                  src={item.image}
                  alt="imagen del producto"
                  className="item__img"
                />

                <div className="item__info">
                  <div className="item__info__top">{item.name}</div>
                  <div className="item__info__bottom">
                    <CustomNumberInput
                      value={quantity}
                      item={itemInfo}
                      controler={quantitySetter}
                    />
                    <div className="">{`$ ${item.price}`}</div>
                  </div>
                </div>
              </section>
            </Card>
          </li>
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
      maxWidth: "500px",
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
        <SetDeliveryAddress
          data={address}
          handleChange={onAddresChange}
          cancel={toggleModal}
          saveChanges={toggleModal}
        />
      </Modal>
      <div className="info__block">
        <div className="info__block__field-container info__block__field-container--dark">
          <h2 className="info__block__title info__block__title--small info__block__title--bold">
            Envio
          </h2>

          <div className="info__block__edit-btn">
            <Button
              className="button--cian-lighter button--small button--lowercase"
              innerHTML="edit"
              clickHandler={toggleModal}
            />
          </div>
        </div>

        <div className="info__block__field-container">
          <p className="info__block__field">Gaston Casini</p>
        </div>

        <div className="info__block__field-container">
          <p className="info__block__field">
            {`${address.street} ${address.streetNumber} (CP ${address.zipCode}) `}{" "}
          </p>
        </div>
        <div className="info__block__field-container">
          <p className="info__block__field">{`${address.locallity} - AR`} </p>
        </div>
      </div>
    </>
  );
}

function Total({ items, total }) {
  return (
    <div className="info">
      <Card>
        <Delivery />
        <hr />
        <div className="info__block">
          {items.map(({ item, quantity }) => (
            <div className="info__block__field-container">
              <p className="info__block__field">{`${item.name} x ${quantity}`}</p>

              <p className="info__block__value">{`$ ${
                item.price * quantity
              }`}</p>
            </div>
          ))}

          <hr />
          <div className="info__block__field-container info__block__field-container--dark">
            <h2 className="info__block__field">Total:</h2>
            <p className="info__block__value">{`$ ${total}`}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ItemListWithTotal({ items, total, setItemQuantityAction }) {
  function quantityControler(action, item) {
    setItemQuantityAction(action, item);
  }

  return (
    <>
      <ItemList items={items} quantitySetter={quantityControler} />
      <Total items={items} total={total} />
    </>
  );
}

function mapStateToProps({ user }) {
  return {
    items: user.order.items,
    total: user.order.total,
  };
}

export default connect(mapStateToProps, { setItemQuantityAction })(
  ItemListWithTotal
);
