import { Navigate, Route, Routes } from 'react-router-dom';
import { homePage } from './pages/homePage';
import { cartaPage } from '../pages/cartaPage';
import { inspiracionesPage } from '../pages/inspiracionesPages';
import { nosotrosPage } from '../pages/nosotrosPage';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<homePage />} />
        <Route path="/carta" element={<cartaPage />} />
        <Route path="/inspiraciones" element={<inspiracionesPage />} />
        <Route path='/nosotros' element={<nosotrosPage />} />

      {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};