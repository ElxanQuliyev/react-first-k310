import React from 'react'

const Product = ({ad,hobby}) => {
    console.log(hobby)
  return (
    <div className="product-item">
        <h4>{ad}</h4>
        {hobby.map(c=><p>{c}</p>)}
    </div>
  )
}

export default Product