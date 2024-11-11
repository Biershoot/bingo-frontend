import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Asegúrate de que todos los campos se estén enviando correctamente
            await axios.post('http://localhost:8080/api/usuarios/registrar', {
                nombre,
                correo,
                contrasena,
            });
            alert('Registro exitoso');
        } catch (error) {
            console.error('Error:', error.response.data);
            alert('Error al registrar usuario');
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default RegisterPage;


