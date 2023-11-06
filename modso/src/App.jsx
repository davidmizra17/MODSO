import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Formulario from "./pages/Formulario.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
import RegisterForm from "./components/Register/RegisterForm.jsx";
import UserContextProvider from "./context/userContext.jsx";

export default function App() {
  return (
  <>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </>
);
  
}
