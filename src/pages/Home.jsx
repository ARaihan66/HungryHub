import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItem from '../components/FoodItem'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <CategoryMenu/>
     <FoodItem/>
    </div>
  )
}

export default Home
