import React, { useEffect, useState } from 'react';

const Wishlist = () => {
    const[wishlist, setWishlist] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect (() => {
        const savedList = JSON.parse(localStorage.getItem('wishlist'))
        if (savedList) setWishlist(savedList) 
    }, [] ) 


    const sortedItem = () => {
        if(sortOrder === 'price-asc') {
            return [...wishlist].sort((a,b) => a.price -b.price)
        } else if (sortOrder === 'price-desc') {
            return [...wishlist].sort((a,b) => b.price - a.price)
        } else {
            return wishlist
        }
    }
    return (
        <>
        <div className='space-y-6'>
         <div>
               
         <h1> Wish list page : {wishlist.length} Product found </h1>
        
         <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by price</option>
            <option value='price-asc'>Low-&gt;High</option>
            <option value='price-desc'>High-&gt;Low</option>
          </select>
        </label>
         </div>

            <div className='space-y-3'>
                {sortedItem().map(p => (
                    <div key={p.id} className="card card-side bg-base-100 shadow-sm">
            <figure>
            <img 
           className='w-40 h-28 object-cover'
           src={p.image} 
           alt={p.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{p.name}</h2>
                <p className='text-base-content/70'>{p.category}</p>
                <p className='text-base-content/70'>Price : {p.price} $</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Remove</button>
                </div>
            </div>
    </div>))}
            
            </div>
        </div>

        </>
        

    );
};

export default Wishlist;