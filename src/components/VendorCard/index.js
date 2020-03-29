import React from "react";
import Card from "../Card";

export default function VendorCard({ name, logo, slogan }) {
  const initialProps = {
    name: "Shoes inc",
    slogan: "15 years delivering high quality shoes ",
    logo: "https://cdn.dribbble.com/users/230290/screenshots/6617275/db_drb.jpg"
  };

  logo = logo ? logo : initialProps.logo;
  name = name ? name : initialProps.name;
  slogan = slogan ? slogan : initialProps.slogan;

  return (
    <Card>
      <img src={logo} alt="vendor logo" className={""} />
      <h2>{name}</h2>
      <p>{slogan}</p>
    </Card>
  );
}
