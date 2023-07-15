import { useState } from 'react';
import './App.css';
import Navigation from './navigation/Navigation';

function App() {

  const [data, setData] = useState(null);

  const clickHandler =  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json()

    setData(data);

  }
  
  return (
    <div className="App">
      {/* <Navigation /> */}
      <button onClick={clickHandler}>Click Button</button>
    </div>
  );
}


export default App;
