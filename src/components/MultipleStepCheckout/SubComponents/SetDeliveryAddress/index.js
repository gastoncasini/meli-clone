import React from "react";
import InputBlock, { DoubleInputContainer } from "../../../InputBlock";
import Button from "../../../Button";
export function SetDeliveryAddress({
  data,
  handleChange,
  saveChanges,
  cancel,
}) {
  let containerStyles = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
  };

  return (
    <fieldset onChange={handleChange}>
      <h1>datos del envio</h1>
      <InputBlock name="localidad" value={data.locallity} />
      <InputBlock name="calle" value={data.street} />
      <DoubleInputContainer>
        <InputBlock double={true} name="altura" value={data.streetNumber} />
        <InputBlock double={true} name="codigo" value={data.zipCode} />
      </DoubleInputContainer>
      <div style={containerStyles}>
        <Button
          clickHandler={cancel}
          innerHTML="cancelar"
          className={"button--medium button--cian-light button--lowercase"}
        />
        <Button
          clickHandler={saveChanges}
          innerHTML="guardar"
          className={"button--medium button--lowercase button--cian"}
        />
      </div>
    </fieldset>
  );
}
