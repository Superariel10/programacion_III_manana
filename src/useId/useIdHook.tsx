import {useId} from 'react';

export default function useIdHook() {
const id = useId();
const id2 = useId();
console.log(id);
return <div id={id}>Elemento Unico
    <div id={id2}>Elemnto2
    </div>
    </div>
}