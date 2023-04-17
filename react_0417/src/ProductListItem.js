import React, { useState } from "react";

export default function ProductListItem(props) {
  const imgNo = props.imgNo;
  const productName = props.name;
  const productPriceFormatted = props.productPriceFormatted;

  return (
    <>
      <div style={{ 
        display: "inline-flex", 
        flexDirection: "column", 
        gap: "10px" 
        }}>
        <img src= {`https://picsum.photos/id/${imgNo}/400/400`} />
        <div style={{ textAlign: "center", fontWeight: "bold", color: "darkgray" }}>
          {productName}
        </div>
        <div style={{ textAlign: "center" }}>
          {productPriceFormatted}
        </div>
      </div>
    </>
  );
}
