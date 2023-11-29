//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { MusicProvider } from "./context/MusicProvider.jsx";
import {MusicPlayer} from "./component/MusicPlayer.jsx";

const App = () => {

    return (
        <MusicProvider>
            <MusicPlayer/>
        </MusicProvider>
    )
}




//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
