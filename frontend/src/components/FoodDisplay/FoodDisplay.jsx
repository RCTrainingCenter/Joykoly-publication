import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='Book-display' id='Book-display'>
        {/* <h2>Top Book near You</h2> */}
        <div className="Book-display-list">
            {food_list && food_list.map ? food_list.map((item, index) => {
              if (category === 'All' || category === item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
              return null;
            }) : null}
        </div>
    </div>
  )
}

export default FoodDisplay
