import { Container, Row, Col } from 'react-bootstrap';

export const nosotrosPage = () => {
  return (
    <Container>
      <h2 className="text-center">Nosotros</h2>
      <p className="text-center">Bienvenidos al restaurante polinesio "Tropical Paradise". Sumérgete en una experiencia culinaria única que te transportará a las exóticas islas de la Polinesia.</p>

      <Row>
        <Col md={6}>
          <h3>Nuestra Historia</h3>
          <p>Desde nuestra apertura en 1995, nos hemos dedicado a compartir la auténtica cocina y cultura polinesia con nuestros comensales. Nuestro objetivo es brindar una experiencia inolvidable llena de sabores tropicales y hospitalidad cálida.</p>
        </Col>
        <Col md={6}>
          <h3>Nuestro Equipo</h3>
          <p>Contamos con un equipo de chefs expertos y apasionados que se han especializado en las técnicas culinarias tradicionales de la Polinesia. Nuestros camareros y personal de servicio están comprometidos en brindarte un servicio excepcional y una experiencia gastronómica placentera.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h3>Nuestros Ingredientes</h3>
          <p>En "Tropical Paradise", nos enorgullece utilizar ingredientes frescos y auténticos de la región polinesia. Nuestros platos están cuidadosamente preparados con productos locales y exquisitas especias y hierbas tropicales para brindarte una explosión de sabores.</p>
        </Col>
        <Col md={6}>
          <h3>Ambiente Exótico</h3>
          <p>Nuestro restaurante está diseñado para transportarte a las islas polinesias. Nuestro exuberante jardín tropical y una decoración inspirada en la cultura y la naturaleza polinesia crean un ambiente relajado y acogedor que complementa tu experiencia culinaria.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h3>Reservas y Eventos Especiales</h3>
          <p>Estamos encantados de recibir reservas para ocasiones especiales, eventos privados y celebraciones. Ya sea una cena romántica para dos o una fiesta temática polinesia, estaremos encantados de ayudarte a crear recuerdos inolvidables.</p>
        </Col>
        <Col md={6}>
          <h3>¡Te esperamos!</h3>
          <p>Ven y descubre el encanto y la magia de la Polinesia en "Tropical Paradise". ¡Esperamos darte la bienvenida y compartir contigo nuestra pasión por la cocina y la cultura polinesia!</p>
        </Col>
      </Row>
    </Container>
  );
};
