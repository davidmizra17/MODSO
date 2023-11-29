import { Link } from "react-router-dom";
// Desc: 404 Page Not Found
// Manejador de errores
// cuando no existe el URL en el router
const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        
            <Link to="/">
            <button className="bg-primary-500 px-6 py-4 rounded-full
            text-2xl text-white uppercase transition
             hover:bg-primary-400 hover:scale-95
             active:bg-primary-700"
            >
                Para volver a la pagina de inicio, haga click aqui
            </button></Link>
        </div>
    );
};

export default NotFoundPage;
