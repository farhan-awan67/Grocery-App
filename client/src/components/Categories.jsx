import React from 'react'
import { categories } from '../assets/greencart_assets/assets'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-bold mb-2'>Categories</h2>
       {/* cards */}
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
         {categories.map((categorie,idx) => {
            return <Link key={idx} to={`/products/${categorie.path}`} className='w-full rounded-md overflow-hidden shadow-md hover:shadow-lg transition hover:scale-105' style={{backgroundColor: categorie.bgColor}}>
                <img className='w-full object-cover' src={categorie.image} alt="image" />
                <h3 className='text-sm font-semibold text-center mb-3'>{categorie.text}</h3>
            </Link>
         })}
       </div>
    </div>
  )
}

export default Categories
