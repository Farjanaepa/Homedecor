import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
 const {name,image,price,category,id} = product
    return (
     
        <div className="card bg-base-100 shadow-sm hover:scale-100 transition">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <p>Price : $ {price}</p>
    <p>Type : {category}</p>
    <div className="card-actions justify-end">
      <Link to={`/product/${id}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
        </div>

    );
};

export default ProductCard;