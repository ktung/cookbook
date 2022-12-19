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

  const totalBakerPercentage = receipe.ingredients.map(ingredient => (ingredient.bakerPercentage)).reduce((previous, current) => previous+current, 0);

  return (
    <div className="App">
      <ReceipeSelector></ReceipeSelector>
      <a href={receipe.link.fr}>Lien</a>

      {receipe.ingredients.map(ingredient => (
        <IngredientInput
          key={ingredient.name}
          name={ingredient.name}
          percentage={String(ingredient.bakerPercentage)}
          defaultValue={String(Math.round(receipe.presetTotalIngredient/totalBakerPercentage*ingredient.bakerPercentage))}></IngredientInput>
      ))}
      Total {receipe.presetTotalIngredient}

      <div>
        <h2>Notes</h2>
        <ul>
        {receipe.notes.fr.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
        </ul>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
      </div>
    </div>
  )
}

export default App
