import { useState } from 'react';
export function InputParrafo() {
    const [text, setText] = useState("");

    return(
        <div>
            <input
                value={text}
                placeholder="Ingrese Texto"
                onChange={(e)=>setText(e.target.value)}
                />
                <p>{text ||'....'}</p>
        </div>
    )
}