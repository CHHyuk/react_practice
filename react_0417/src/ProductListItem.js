import React, { useState } from "react";

export default function ProductListItem({imgNo,name,price}) {
/* 
  방법 1
  const {imgNo,name: productName,productPriceFormatted} = props;
*/

/* 
  방법 2
  const {imgNo,name,productPriceFormatted} = props;
  const productName = name
*/

/*
  방법 3
  const imgNo = props.imgNo;
  const productName = props.name;
  const productPriceFormatted = props.productPriceFormatted;
*/
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <img src= {`https://picsum.photos/id/${imgNo}/400/400`} />
        <div className="text-center font-bold">{name}</div>
        <div className="after:content-['원'] text-center">{price}</div>
      </div>
    </>
  );
}
