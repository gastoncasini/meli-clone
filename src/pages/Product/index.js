import React from "react";
import { connect } from "react-redux";
import ProductCard from "../../components/ProductCard";
import VendorCard from "../../components/VendorCard";
import QuestionsCard from "../../components/QuestionsCard";

function Product() {
  return (
    <>
      <ProductCard />
      <VendorCard />
      <QuestionsCard />
    </>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Product);
