import { useState } from 'react';
export function Suma() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const sumar = Number(text1)+Number(text2);

    return(
        <div>
            <input
                value={text1}
                placeholder="Ingrese Texto 1"
                onChange={(e)=>setText1(e.target.value)}
                />
             <input
                value={text2}
                placeholder="Ingrese Texto 2"
                onChange={(e)=>setText2(e.target.value)}
                />
                <p>{sumar ||'....'}</p>
        </div>
    )
}