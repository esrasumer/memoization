import { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = ("");

  const data = useMemo(() => {
    return { name: 'Esra' }
  }, [])
  return (
    <div className="App">
      <Header data={data} increment={() => setNumber(number + 1)} />
      <hr />
      <h1>{number}</h1>
      {/* <input type={text} onChange={({ target }) => setText(target.value)} /> */}
    </div>
  );
}

export default App;
