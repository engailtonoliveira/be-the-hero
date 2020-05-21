import React, {useState} from 'react';
import Header from './Header';
import Logon from './pages/Logon';

function App() {
  const [counter, setCounter] = useState(0); // Array [value, updateFunction]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Semana OmniStack">
        Semana OmniStack 11
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    
  )
}

export default App;
