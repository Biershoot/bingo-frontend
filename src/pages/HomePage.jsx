import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h2>¡Bienvenido al Bingo Online!</h2>
            <p>Inicia sesión o regístrate para empezar a jugar.</p>
            <Link to="/login">Iniciar Sesión</Link> | <Link to="/register">Registrarse</Link>
        </div>
    );
}

export default HomePage;
