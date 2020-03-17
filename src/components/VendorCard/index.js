import React from "react";
import Card from "../Card";
import styles from "./vendor.module.css";

export default function VendorCard({ name, image, branding }) {
  const initialProps = {
    name: "Shoes inc",
    branding: "15 years delivering high quality shoes ",
    image:
      "https://cdn.dribbble.com/users/230290/screenshots/6617275/db_drb.jpg"
  };

  image = image ? image : initialProps.image;
  name = name ? name : initialProps.name;
  branding = branding ? branding : initialProps.branding;

  return (
    <Card>
      <img src={image} alt="vendor image" className={styles.image} />
      <h2>{name}</h2>
      <p>{branding}</p>
    </Card>
  );
}
