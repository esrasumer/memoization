import { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return { name: 'Esra' }
  }, [])
  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
