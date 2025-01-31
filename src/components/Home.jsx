import { useState, useEffect } from "react"
import CardPizza from "./CardPizza"
//import Header from "./Header"
//import {pizzas} from "../pizzas"

const Home = () => {
     const [pizzas, setPizza] = useState([]);
    
      const getData = async () => {
        const url = "http://localhost:5000/api/pizzas/";
        const res = await fetch(url);
        const data = await res.json();
        setPizza(data);
      };
    
      useEffect(() => {
        getData();
      }, []);
    
    
    return (
    <>
        <h1>Pizzass Disponibles</h1>
        <div className="cardContainer">
        {pizzas.map((pizza) => (
          <CardPizza
            id={pizza.id}
            desc={pizza.desc}
            img={pizza.img}
            ingredients={pizza.ingredients}
            name={pizza.name}
            price={pizza.price}         
          />
        ))}
      </div>
    </>
    )
}

export default Home