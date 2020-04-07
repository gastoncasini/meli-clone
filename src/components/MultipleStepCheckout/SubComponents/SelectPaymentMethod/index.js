import React from "react";
import Card from "../../../Card";
import { SelectionCubes } from "../../../SelectionCubes";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";
export function SelectPaymentMethod({
  hidden,
  userPaymentMethods,
  data,
  handleChange,
}) {
  let className = hidden
    ? "ms-checkout__step ms-checkout__step--hidden"
    : "ms-checkout__step";

  return (
    <div className={className}>
      <SelectionCubes />
      <Card>
        <h1>Metodo de Pago</h1>
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
      </Card>
    </div>
  );
}
