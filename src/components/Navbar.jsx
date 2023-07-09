import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">
              Inicio
            </NavLink>

            <NavLink className="nav-item nav-link" to="/carta">
              Carta
            </NavLink>

            <NavLink className="nav-item nav-link" to="/nosotros">
              Nosotros
            </NavLink>

            <NavLink className="nav-item nav-link" to="/inspiraciones">
              Inspiraciones
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};