import { useState } from 'react'
import './App.css'
import { IngredientInput } from './components/IngredientInput/IngredientInput'
import { ReceipeSelector } from './components/ReceipeSelector/ReceipeSelector'
import receipe from './assets/receipes/100-pizza-dough.json'



function App() {
  const [count, setCount] = useState(0);

  // const receipe = (async function() { 
  //   return await import('./assets/receipes/100-pizza-dough.json');
  // })

  return (
    <div className="App">
      <ReceipeSelector></ReceipeSelector>
      {/* <IngredientInput name="Farine t65" percentage="100"></IngredientInput> */}
      <pre>
        {JSON.stringify(receipe)}
      </pre>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
      </div>
    </div>
  )
}

export default App
