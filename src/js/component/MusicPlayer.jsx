import React, { useContext } from "react";
import {MusicContext} from "../context/MusicProvider.jsx";
import { MusicProvider } from "../context/MusicProvider.jsx";

export const MusicPlayer = () => {

    const {cancion, setCancion} = useContext(MusicContext);

    const {tema, toogleTema} = useContext(MusicContext);

    function cambiarCancion() {
        setCancion("cancion 2");
    }

    function cambiarTema() {
        toogleTema();
    }

    return ( 
        <div style={{background: tema === "dark" ? "#333" : "#fff" }}>
            <p>esta es la cancion que se esta escuchando para toda la App <strong>{cancion}</strong></p>
            <button onClick={() => cambiarCancion()} > Dame click pa cambia cancion </button>
            <button onClick={() => cambiarTema()}> yo cambio tema</button>
        </div>   
    )
}

