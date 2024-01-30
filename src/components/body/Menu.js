import React, { useState } from 'react'
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import DishDetails from './DishDetails';

const Menu = () => {
    const [dishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(dishes[0]);
    const onSelectDish = dish => {
        // const aDish = dishes.find(item => dish.id === item.id);
        setSelectedDish(dish);
    }
    const menu = dishes.map(dish => {
        return (<MenuItem
            key={dish.id}
            dish={dish}
            onSelectDish={onSelectDish}
        />)
    });
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    {menu}
                </div>
                <div className='col-7'>
                    <DishDetails dish={selectedDish} />
                </div>
            </div>
        </div>
    )
}

export default Menu;