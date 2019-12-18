import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
    const [carts] = useContext(CartContext);
    return (
        <span >
           <li> Carts: {carts.length} courses</li>
        </span>
    );
}