import Card from 'react-bootstrap/Card'
const CardPizza = ({imgpizza,nombrepizza,ingredientes,precio}) => {
    return (
        <>
          
                <Card style={{ width: "25rem", height: "35rem" }}>
                    <div className='fotopizza'>
                    <Card.Img variant="top" src={imgpizza}/>
                    </div>
                    <Card.Body>
                        <Card.Title> <h4>Pizza {nombrepizza}</h4> </Card.Title>
                        <hr />
                        <Card.Text> Ingredientes: </Card.Text>
                        <Card.Text>{ingredientes[0]}, {ingredientes[1]}, {ingredientes[2]}, {ingredientes[3]} </Card.Text>
                        <hr />
                        <Card.Text> <strong>Precio : {precio.toLocaleString()}</strong></Card.Text>
                        <button className="btn btn-primary">Ver Más</button>
                        <button className="btn btn-success">Añadir</button>
                    </Card.Body>
                   
                </Card>
           
        </>
    )
}

export default CardPizza
