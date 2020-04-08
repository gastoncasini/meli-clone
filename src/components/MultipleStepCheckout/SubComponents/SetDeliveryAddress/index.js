import React from "react";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";

export function SetDeliveryAddress({ data, handleChange }) {
  return (
    <fieldset onChange={handleChange}>
      <h1>datos del envio</h1>
      <InputBlock name="localidad" value={data.locallity} />
      <InputBlock name="calle" value={data.street} />
      <DoubleInputContainer>
        <InputBlock double={true} name="altura" value={data.streetNumber} />
        <InputBlock double={true} name="codigo" value={data.zipCode} />
      </DoubleInputContainer>
    </fieldset>
  );
}
