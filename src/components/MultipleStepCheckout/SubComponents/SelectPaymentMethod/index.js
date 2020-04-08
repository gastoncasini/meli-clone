import React from "react";
import Card from "../../../Card";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export function SelectPaymentMethod({ hidden, data, handleChange }) {
  let className = hidden
    ? "ms-checkout__step ms-checkout__step--hidden"
    : "ms-checkout__step";

  return (
    <div className={className}>
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
          <FontAwesomeIcon icon={faLock} />
        </div>
      </Card>
    </div>
  );
}
