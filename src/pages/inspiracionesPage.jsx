import { Container, Row, Col } from 'react-bootstrap';

export const InspiracionesPage = () => {
  return (
    <Container>
        <div className="tituloCarta">
      <div className="tituloInspiraciones">
      <h3 className="text-center">Inspiraciones</h3>
      <p className="text-center">Explora nuestras inspiraciones culinarias que te transportarán a las exóticas islas de la Polinesia.</p>
      </div>
      </div>
      <Row>
        <Col md={6}>
          <div  className="tropical">
          <h4 className="inspo">Inspiración Tropical</h4>
          <p className="inspo">Sumérgete en los sabores tropicales de la Polinesia. Desde la frescura de las frutas tropicales hasta los mariscos y pescados exquisitos, te llevaremos a un viaje culinario por el paraíso tropical.</p>
          <img className="flores" src="src/assets/Flores.jpeg" ></img>
          </div>
        </Col>
        <Col md={6}>
          <h4 className="inspo">Inspiración Tradicional</h4>
          <p className="inspo">Descubre los platos tradicionales polinesios que han sido transmitidos de generación en generación. Desde el delicioso poke hawaiano hasta el umu samoano y el curanto de la Isla de Pascua, te sorprenderemos con la auténtica cocina de la Polinesia.</p>
          <img className="ostra" src="src/assets/Ostra.png" ></img>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h4 className="inspo">Inspiración Fusión</h4>
          <p className="inspo">Explora la fusión de sabores de la cocina polinesia con influencias internacionales. Desde los platos polinesios con toques asiáticos hasta la mezcla de sabores polinesios y europeos, te sorprenderemos con una experiencia culinaria única y creativa.</p>
          <img className="alga" src="src/assets/Alga.gif" ></img>

        </Col>
        <Col md={6}>
          <h4 className="inspo">Inspiración de Bebidas</h4>
          <p className="inspo">Descubre las refrescantes bebidas tropicales de la Polinesia. Desde los coloridos cócteles tiki hasta los jugos naturales de frutas tropicales, te llevaremos a un viaje de sabores refrescantes y exóticos.</p>
          <img className="langosta" src="src/assets/Langosta.jpeg" ></img>
        </Col>
      </Row>
    </Container>
  );
};
