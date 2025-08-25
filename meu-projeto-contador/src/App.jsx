import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  const discrementCount = () => {
    setCount(count - 1);
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className='contador-container'>
      <h1>Contador de Cliques</h1>
      <p>Cliques: {count}</p>
      <button onClick={incrementCount}>Adicionar</button>
      <button className='discrement' onClick={discrementCount}>Diminuir</button>
      <button className='reset' onClick={resetCount}>Resetar</button>
    </div>
  );
}

export default App;