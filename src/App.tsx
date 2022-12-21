import { Component } from 'react'
import './App.css'
import { IngredientInput } from './components/IngredientInput/IngredientInput'
import { ReceipeSelector } from './components/ReceipeSelector/ReceipeSelector'
import { NotesList } from './components/NotesList/NotesList'
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

interface AppProps {}
interface AppState {
  receipeFilename: string,
  receipeJSON?: Receipe,
  totalBakerPercentage?: number
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

export class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.onChangeReceipe = this.onChangeReceipe.bind(this);
  }

  componentDidMount(): void {
    this.importReceipe('100-pizza-dough');
  }

  onChangeReceipe(receipeFilename: string) {
    this.importReceipe(receipeFilename);
  }

  importReceipe(receipeFilename: string) {
    import(`./assets/receipes/${receipeFilename}.json`).then((data: Receipe) => {
      const totalBakerPercentage = data.ingredients.map(ingredient => (ingredient.bakerPercentage)).reduce((previous, current) => previous+current, 0);

      this.setState({
        receipeFilename: receipeFilename,
        receipeJSON: data,
        totalBakerPercentage: totalBakerPercentage
      });
    });
  }

  computeDefaultValue(bakerPercentage: number): number {
    if (!this.state.receipeJSON || !this.state.totalBakerPercentage) {
      return 0;
    }

    return Math.round(this.state.receipeJSON.presetTotalIngredient/this.state.totalBakerPercentage*bakerPercentage);
  }

  render() {
    if (!this.state || !this.state.receipeJSON) {
      return null;
    }

    return <div className="App">
      <LanguageSelector></LanguageSelector>
      <ReceipeSelector onChange={this.onChangeReceipe}></ReceipeSelector>
      { !!this.state.receipeJSON.link && !!this.state.receipeJSON.link.fr && <a href={this.state.receipeJSON.link.fr}>Lien</a> }

      {this.state.receipeJSON.ingredients.map(ingredient => (
        <IngredientInput
          key={ingredient.name}
          name={ingredient.name}
          percentage={String(ingredient.bakerPercentage)}
          defaultValue={String(this.computeDefaultValue(ingredient.bakerPercentage))}></IngredientInput>
      ))}
      Total {this.state.receipeJSON.presetTotalIngredient}

      <NotesList notes={this.state.receipeJSON.notes}></NotesList>
    </div>
  }
}
