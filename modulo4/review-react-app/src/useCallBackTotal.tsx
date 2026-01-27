import { useCallback, useState } from 'react';
export default function UseCallBackTotal() {
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);

    const total = useCallback(()=>{
        console.log("Recalculando Area Triangulo...");
        return base * altura
    },[base, altura])

    return(
        <div>
            <input
                value={base}
                placeholder="Ingrese Numero 1"
                onChange={(e)=>setBase(Number(e.target.value))}
                />
             <input
                value={altura}
                placeholder="Ingrese Texto 2"
                onChange={(e)=>setAltura(Number(e.target.value))}
                />
                <p>Total{total() ||'....'}</p>
        </div>
    )
}