import { useState } from 'react'
import './App.css'

import { ReceipeSelector } from './components/ReceipeSelector/ReceipeSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReceipeSelector></ReceipeSelector>
      <h1>NOT RECEIPES</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
