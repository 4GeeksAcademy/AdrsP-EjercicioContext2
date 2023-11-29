import React, { children, createContext, useState} from "react";

export const MusicContext = createContext();

export const MusicProvider = ({children}) => {

    const [cancion, setCancion] = useState('Cancion 1',);

    const [tema, setTema] = useState("light");

    function toogleTema () {
        setTema((prevTheme) => prevTheme === "light" ? "dark" : "light" )
    }
// nota <MusicContext.Provider value={{tema, setTema}}> usar esto para cambiar el tema
    return (
        <MusicContext.Provider value={{cancion, setCancion, tema, toogleTema}}>
            {children}
        </MusicContext.Provider>
    )


}

