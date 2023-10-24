import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Formulario from "./pages/Formulario.jsx";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="formulario" element={<Formulario />} />
          
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
