import CardPizza from "./CardPizza"
import Header from "./Header"
import {pizzas} from "../pizzas"

const Home = () => {
    return (
    <>
        <Header />
            {pizzas.map((pizza) => (
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  desc={pizza.desc}
                />
            ))}
    </>
    )
}

export default Home