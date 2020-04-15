import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItemAction } from "../../redux/productsDuck";
import ProductCard from "../../components/ProductCard";
import VendorCard from "../../components/VendorCard";
import QuestionsCard from "../../components/QuestionsCard";
import NavBar from "../../components/NavBar";

function Product({ item, fetchItemAction }) {
  useEffect(() => {
    if (!item) {
      fetchItemAction();
    }
  }, []);

  if (!item) {
    return <h1>...CARGANDO</h1>;
  }
  return (
    <>
      <NavBar />
      <ProductCard {...item} unique={true} />
      <VendorCard {...item.vendor} />
      <QuestionsCard questions={item.questions} vendor={item.vendor.name} />
    </>
  );
}

function mapStateToProps({ products }) {
  return {
    item: products.selectedItem,
  };
}

export default connect(mapStateToProps, { fetchItemAction })(Product);
