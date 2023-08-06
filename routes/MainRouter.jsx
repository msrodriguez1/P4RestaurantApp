import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from "../src/pages/homePage";
import { CartaPage } from "../src/pages/cartaPage";
import { InspiracionesPage } from "../src/pages/inspiracionesPage";
import { NosotrosPage } from "../src/pages/nosotrosPage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/carta" element={<CartaPage />} />
        <Route path="/inspiraciones" element={<InspiracionesPage />} />
        <Route path='/nosotros' element={<NosotrosPage />} />

      {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};