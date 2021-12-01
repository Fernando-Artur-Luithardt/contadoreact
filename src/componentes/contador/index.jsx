import "./index.css";
import { useState } from "react";

export default function Contador() {
    const[contador, setContador] = useState(0);

    function somar() {
        setContador(contador + 1);
    }



    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={somar}>mais</button>
            
        </div>
    )


} //final função export
