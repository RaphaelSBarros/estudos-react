import { useEffect, useState } from "react";

function Relogio() {
    const [horaAtual, setHoraAtual] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setHoraAtual(pegarHoraAtual());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    function pegarHoraAtual() {
        return new Date().toLocaleString('pt-BR');
    }

    return (
        <div>
            <h1>Relógio</h1>
            <p>Hora atual: {pegarHoraAtual()}</p>
        </div>
    )
}

export default Relogio;