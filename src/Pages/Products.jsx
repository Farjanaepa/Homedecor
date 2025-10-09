import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';

const Products = () => {
    const {products} = useProducts()
    const [search, setSearch] =useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term
    ? products.filter(product =>
        product.name.toLocaleLowerCase().includes(term)

    )
    : products
    console.log(searchedProducts)


    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>All Product</h1>
                <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
  <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                </label>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
             {
           searchedProducts.map(product=>(
              <ProductCard key={product.id} product={product} />
            ))
          }
         </div>
        </div>
    );
};

export default Products;