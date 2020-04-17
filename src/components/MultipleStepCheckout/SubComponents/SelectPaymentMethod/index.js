import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../Card";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";
function SelectPaymentMethod({ data, handleChange, total }) {
  total = total ? total : 0.0;
  let totalStyles = {
    width: "100%",
    maxWidth: "450px",
    minWidth: "250px",
  };

  return (
    <>
      <div style={totalStyles}>
        <Card>
          <h1>{`$ ${total}`}</h1>
        </Card>
      </div>
      <Card>
        <p>Tarjeta de Credito/Debito</p>
        <fieldset onChange={handleChange}>
          <InputBlock name="nombre" value={data.name} />
          <InputBlock name="numero" value={data.number} />
          <DoubleInputContainer>
            <InputBlock
              double={true}
              name="vencimiento"
              value={data.expiration}
            />
            <InputBlock double={true} name="cvv" value={data.code} />
          </DoubleInputContainer>
        </fieldset>

        <div className="ms-checkout__step__info">
          <strong>Pago seguro</strong>
          <FontAwesomeIcon icon="lock" />
        </div>
      </Card>
    </>
  );
}

function mapStateToProps({ user }) {
  return { total: user.order.total };
}

export default connect(mapStateToProps)(SelectPaymentMethod);
