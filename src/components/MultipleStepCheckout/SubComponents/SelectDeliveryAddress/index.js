import React from "react";
import Card from "../../../Card";
import { SelectionCubes } from "../../../SelectionCubes";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";
export function SelectDeliveryAddress({
  hidden,
  userAddresses,
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
        <fieldset onChange={handleChange}>
          <h1>datos del envio</h1>
          <InputBlock name="localidad" value={data.locallity} />
          <InputBlock name="calle" value={data.street} />
          <DoubleInputContainer>
            <InputBlock double={true} name="altura" value={data.streetNumber} />
            <InputBlock double={true} name="codigo" value={data.zipCode} />
          </DoubleInputContainer>
        </fieldset>
      </Card>
    </div>
  );
}
