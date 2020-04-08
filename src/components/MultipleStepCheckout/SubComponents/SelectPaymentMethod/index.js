import React from "react";
import Card from "../../../Card";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function SelectPaymentMethod({ data, handleChange }) {
  return (
    <>
      <Card>
        <h1>$ 2194.00</h1>
      </Card>
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
