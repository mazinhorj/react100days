import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {

  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "showText":
      return { ...state, showText: !state.showText };
    //essa faz as 2 coisas ao mesmo tempo, mas não preserva o estado inicial, sobrescrevendo-os
    case "IncrementAndShowText":
      return { count: state.count + 1, showText: !state.showText };
    case "reset":
      return { count: 0, showText: true };
    default:
      return "Ação não permitida!"
  }

}



function App() {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  })

  // destructuring

  const { count, showText } = state;

  const handleClick = () => {
    // dispatch({ type: 'Increment' });
    // dispatch({ type: 'showText' });

    dispatch({ type: 'IncrementAndShowText' })
  };

  

  return (
    <div className="App">
      <h1>useReducer</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Ativar</button>
      <button onClick={() => dispatch({type: 'reset'})}>Zerar</button>
      {showText && <p>Utilizando o useReducer. Uma alternativa para casos mais complexos/específicos do que o useState.</p>}
    </div>
  )
}

export default App
