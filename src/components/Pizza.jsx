import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

const Pizza = () => {
  const [pizzas, setPizza] = useState({ ingredients : []});
  const url = "http://localhost:5000/api/pizzas/p001";

  const getData = async () => {
    
    const res = await fetch(url);
    const data = await res.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
        <Header />
            <Card >
                 <div className='fotopizza1'>
                    <Card.Img variant="top" src={pizzas.img}/>
                 </div>
                <Card.Title> <h4>Pizza {pizzas.name}</h4> </Card.Title>
                <Card.Text> Descripción: {pizzas.desc} </Card.Text>
                  <Card.Text> Ingredientes: </Card.Text>
                        <ul>
                            <li>{pizzas.ingredients[0]}</li>
                            <li>{pizzas.ingredients[1]}</li>
                            <li>{pizzas.ingredients[2]}</li>
                            <li>{pizzas.ingredients[3]}</li>
                        </ul>
                    <Card.Text> <strong>Precio : $ {pizzas.price}</strong></Card.Text>
                  <button className="btn btn-success">Añadir</button>
            </Card>
    </>
  )
}

export default Pizza
