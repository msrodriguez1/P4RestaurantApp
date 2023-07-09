import { Container, Row, Col } from 'react-bootstrap';

export const inspiracionesPage = () => {
  return (
    <Container>
      <h2 className="text-center">Inspiraciones</h2>
      <p className="text-center">Explora nuestras inspiraciones culinarias que te transportarán a las exóticas islas de la Polinesia.</p>
      
      <Row>
        <Col md={6}>
          <h3>Inspiración Tropical</h3>
          <p>Sumérgete en los sabores tropicales de la Polinesia. Desde la frescura de las frutas tropicales hasta los mariscos y pescados exquisitos, te llevaremos a un viaje culinario por el paraíso tropical.</p>
        </Col>
        <Col md={6}>
          <h3>Inspiración Tradicional</h3>
          <p>Descubre los platos tradicionales polinesios que han sido transmitidos de generación en generación. Desde el delicioso poke hawaiano hasta el umu samoano y el curanto de la Isla de Pascua, te sorprenderemos con la auténtica cocina de la Polinesia.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h3>Inspiración Fusión</h3>
          <p>Explora la fusión de sabores de la cocina polinesia con influencias internacionales. Desde los platos polinesios con toques asiáticos hasta la mezcla de sabores polinesios y europeos, te sorprenderemos con una experiencia culinaria única y creativa.</p>
        </Col>
        <Col md={6}>
          <h3>Inspiración de Bebidas</h3>
          <p>Descubre las refrescantes bebidas tropicales de la Polinesia. Desde los coloridos cócteles tiki hasta los jugos naturales de frutas tropicales, te llevaremos a un viaje de sabores refrescantes y exóticos.</p>
        </Col>
      </Row>
    </Container>
  );
};
