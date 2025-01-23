import Card from 'react-bootstrap/Card'
const CardPizza = ({id,desc,img,ingredients,name,price}) => {
    return (
        <>
          
                <Card style={{ width: "25rem", height: "55rem" }}>
                    <div className='fotopizza' id={id}>
                    <Card.Img variant="top" src={img}/>
                    </div>
                    <Card.Body>
                        <Card.Title> <h4>Pizza {name}</h4> </Card.Title>
                        <hr />
                        <Card.Text> Ingredientes: </Card.Text>
                        <ul>
                            <li>{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li>{ingredients[2]}</li>
                            <li>{ingredients[3]}</li>
                        </ul>
                        {/*<Card.Text>{ingredients[0]}, {ingredients[1]}, {ingredients[2]}, {ingredients[3]} </Card.Text>*/}
                        <Card.Text> Descripción: {desc} </Card.Text>
                        <hr />
                        <Card.Text> <strong>Precio : {price.toLocaleString()}</strong></Card.Text>
                        <button className="btn btn-primary">Ver Más</button>
                        <button className="btn btn-success">Añadir</button>
                    </Card.Body>
                   
                </Card>
           
        </>
    )
}

export default CardPizza