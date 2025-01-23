import React, { useState } from 'react'
import {pizzaCart} from "../pizzas"

function Cart() {
    const [carrito, setCarrito] = useState(pizzaCart);
    let totalPrice = 0

    const agregarPizza = (index) => {
        const pizzaItems = [...carrito];
        pizzaItems[index].count += 1;
        setCarrito(pizzaItems);
    }

    const eliminaPizza = (index) => {
        const pizzaItems = [...carrito];
        pizzaItems[index].count -= 1;
        setCarrito(pizzaItems);
    }

  return (
    <div>
        <h2>Detalle del pedido: </h2>
        {carrito.map((pizzaCart,index) => <li key={pizzaCart.id} className='listaCompra'>
                <table>
                    <tr>
                        <td className='tdCarrito'>
                            <img className='fotopizza1' src={pizzaCart.img} alt={pizzaCart.name} />
                        </td>
                        <td className='tdCarrito'>
                           <h5>{pizzaCart.name}</h5>
                        </td>
                        <td className='tdCarrito'>
                            <h6>$ {pizzaCart.price.toLocaleString('es-CL')}</h6>
                        </td>
                        <td className='tdCarrito1'> 
                            <button onClick={() => eliminaPizza(index)}> - </button>
                        </td>
                        <td className='tdCarrito1'>
                            {pizzaCart.count}
                        </td>
                        <td className='tdCarrito1'>
                            <button onClick={() => agregarPizza(index)}> + </button>
                        </td>
                    </tr>
                </table>
                </li>
            )}
            <h3>Total : $ {totalPrice=carrito.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0).toLocaleString('es-CL')}</h3>
            <button>Pagar</button>
    </div>
  )
}

export default Cart
