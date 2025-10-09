import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
    const { id } = useParams()
     const { products, loading,error } = useProducts()
   

    const product = products.find(p => String(p.id) === id)
   

    if(loading) return <p> loading....</p>
    const { name, image,category, price} = product


    const handleAddToWishlist = () =>{

        const existingList= JSON.parse(localStorage.getItem('wishlist'))
        console.log(existingList)

        localStorage.setItem('wishlist' , JSON.stringify(product))
    }
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
      <button onClick={handleAddToWishlist} to={`/product/${id}`} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
        </div>
    );
};

export default ProductDetails;