import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const products = useLoaderData()
    const featuredproducts= products.slice(0,6)
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>Featured Product</h1>
                <Link className='btn btn-outline' to='/products'>See All product</Link>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
             {
            featuredproducts.map(product=>(
              <ProductCard key={product.id} product={product} />
            ))
          }
         </div>
        </div>
    );
};

export default Home;