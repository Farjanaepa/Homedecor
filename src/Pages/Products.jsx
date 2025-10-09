import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>All Product</h1>
                <Link className='btn btn-outline' to='/products'> Search product</Link>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
             {
            products.map(product=>(
              <ProductCard key={product.id} product={product} />
            ))
          }
         </div>
        </div>
    );
};

export default Products;<h1>Products section</h1>