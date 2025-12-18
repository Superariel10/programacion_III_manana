import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  radio: number;
  area: number;
}

interface Action {
  name: string;
  value: number;
}

const initialState: State = { radio: 0, area: 0 };

function reducer(state: State, action: Action): State {
  switch (action.name) {
    case 'radio':
      return { radio: action.value, area: Math.PI * action.value ** 2 }; 
    default:
      return state;
  }
}

export default function FormularioReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch({ name, value: Number(value) }); 
  }

  return (
    <form>
      <input
        name="radio" 
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio"
        type="number"
      />
      <input
        name="area" 
        value={state.area}
        readOnly 
        placeholder="Área"
      />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
