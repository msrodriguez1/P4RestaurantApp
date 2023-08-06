import { Container } from 'react-bootstrap';

export const CartaPage = () => {
  return (
    <Container>
      <div className="carta">
      <div className="tituloCarta">
      <h2 className="text-center">Carta</h2>
      <p className="text-center">Descubre nuestra deliciosa selección de platos polinesios, cuidadosamente preparados para brindarte una experiencia gastronómica única.</p>
      <img className="atun" src="src/assets/Atun.jpeg" ></img>

      </div>
      <div className="cartaTexto">
      <div className="my-4">
        <h4>Entradas</h4>
        <ul>
          <li>Poke de salmón</li>
          <li>Ceviche de mariscos</li>
          <li>Rollitos de primavera polinesios</li>
        </ul>
      </div>

      <div className="my-4">
        <h4>Platos Principales</h4>
        <ul>
          <li>Pescado a la parrilla con salsa de coco</li>
          <li>Curry de pollo polinesio</li>
          <li>Costillas de cerdo glaseadas</li>
        </ul>
      </div>

      <div className="my-4">
        <h4>Postres</h4>
        <ul>
          <li>Piña colada cheesecake</li>
          <li>Pudín de pan de plátano</li>
          <li>Helado de coco con salsa de piña</li>
        </ul>
      </div>
      </div>
      </div>
      <div className="tituloCarta"><p className="text-center">¡Disfruta de una explosión de sabores auténticos de la Polinesia en cada bocado!</p></div>
      
    </Container>
  );
};
