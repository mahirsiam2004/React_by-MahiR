import React from 'react'

const Productinfo = () => {
const product={
name :"laptop",
price:1200,
availability:"in stock"
};

  return (
    <div>
      <h1>Name :{product.name}</h1>
      <h1>Price :${product.price}</h1>
      <h1>Availability :{product.availability}</h1>
    </div>
  )
}

export default Productinfo
