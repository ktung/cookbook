import { Component } from 'react'
import './App.css'
import { IngredientInput } from './components/IngredientInput/IngredientInput'
import { ReceipeSelector } from './components/ReceipeSelector/ReceipeSelector'
import { NotesList } from './components/NotesList/NotesList'

interface AppProps {}
interface AppState {
  receipeFilename: string,
  receipeJSON?: Receipe
}

interface Receipe {
  name: {
    en: string,
    fr: string
  },
  link: {
    en: string,
    fr: string
  }
  ingredients: [
    {
      name: string,
      bakerPercentage: number
    }
  ],
  presetTotalIngredient: number,
  notes: {
    en: Array<string>,
    fr: Array<string>
  }
}

class App extends Component<AppProps, AppState> {
  totalBakerPercentage = 0;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      receipeFilename: '100-pizza-dough'
    };
  }

  componentDidMount(): void {
    import(`./assets/receipes/${this.state.receipeFilename}.json`).then((data: Receipe) => {
      this.setState({
        receipeFilename: this.state.receipeFilename,
        receipeJSON: data
      });

      if (!!this.state.receipeJSON) {
        this.totalBakerPercentage = this.state.receipeJSON.ingredients.map(ingredient => (ingredient.bakerPercentage)).reduce((previous, current) => previous+current, 0);
      }
    });
  }

  render() {
    if (!!this.state.receipeJSON) {
      return <div className="App">
        <ReceipeSelector></ReceipeSelector>
        <a href={this.state.receipeJSON.link.fr}>Lien</a>

        {this.state.receipeJSON.ingredients.map(ingredient => (
          <IngredientInput
            key={ingredient.name}
            name={ingredient.name}
            percentage={String(ingredient.bakerPercentage)}
            defaultValue={String(Math.round(this.state.receipeJSON.presetTotalIngredient/this.totalBakerPercentage*ingredient.bakerPercentage))}></IngredientInput>
        ))}
        Total {this.state.receipeJSON.presetTotalIngredient}

        <NotesList notes={this.state.receipeJSON.notes}></NotesList>
      </div>
    }
  }
}

export default App
