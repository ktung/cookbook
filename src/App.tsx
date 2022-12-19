import { Component } from 'react'
import './App.css'
import { IngredientInput } from './components/IngredientInput/IngredientInput'
import { ReceipeSelector } from './components/ReceipeSelector/ReceipeSelector'
import receipe from './assets/receipes/100-pizza-dough.json'
import { NotesList } from './components/NotesList/NotesList'

interface AppProps {}
interface AppState {
  count: number
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // const receipe = (async function() { 
  //   return await import('./assets/receipes/100-pizza-dough.json');
  // })

  totalBakerPercentage = receipe.ingredients.map(ingredient => (ingredient.bakerPercentage)).reduce((previous, current) => previous+current, 0);

  increaseCount() {
    this.setState({
      count: this.state.count+1
    });
  }

  render() {
    return <div className="App">
      <ReceipeSelector></ReceipeSelector>
      <a href={receipe.link.fr}>Lien</a>

      {receipe.ingredients.map(ingredient => (
        <IngredientInput
          key={ingredient.name}
          name={ingredient.name}
          percentage={String(ingredient.bakerPercentage)}
          defaultValue={String(Math.round(receipe.presetTotalIngredient/this.totalBakerPercentage*ingredient.bakerPercentage))}></IngredientInput>
      ))}
      Total {receipe.presetTotalIngredient}

      <NotesList notes={receipe.notes}></NotesList>

      <div className="card">
        <button onClick={() => this.increaseCount()}>
          count is {this.state.count}
        </button>
      </div>
    </div>
  }
}

export default App
