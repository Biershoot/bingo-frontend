import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

function GamePage() {
    const [balotas, setBalotas] = useState([]);
    const token = localStorage.getItem('token'); // Recupera el token JWT

    useEffect(() => {
        // Configurar SockJS y STOMP
        const socket = new SockJS('http://localhost:8080/bingo-websocket');
        const stompClient = Stomp.over(socket);

        stompClient.connect({ Authorization: `Bearer ${token}` }, () => {
            stompClient.subscribe('/topic/balotas', (mensaje) => {
                const nuevaBalota = JSON.parse(mensaje.body);
                setBalotas((prevBalotas) => [...prevBalotas, nuevaBalota]);
            });
        });

        return () => {
            stompClient.disconnect();
        };
    }, [token]);

    return (
        <div>
            <h2>Juego de Bingo</h2>
            <div>
                <h3>Balotas Anunciadas</h3>
                {balotas.map((balota, index) => (
                    <span key={index} style={{ margin: '5px' }}>{balota}</span>
                ))}
            </div>
        </div>
    );
}

export default GamePage;

