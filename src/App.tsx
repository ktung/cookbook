import { Component } from 'react'
import { ReceipeSelector } from './components/ReceipeSelector/ReceipeSelector'
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'
import { ReceipePanel } from './components/ReceipePanel/ReceipePanel'

interface AppProps {}
interface AppState {
  receipeFilename: string
}

export class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.onChangeReceipe = this.onChangeReceipe.bind(this);
  }

  onChangeReceipe(receipeFilename: string) {
    this.setState({
      receipeFilename: receipeFilename
    });
  }

  render() {
    return <>
      <header>
        <LanguageSelector></LanguageSelector>
        <h1 className='text-center my-2 text-3xl font-mono'>Bread Receipes</h1>
      </header>
      <ReceipeSelector onChange={this.onChangeReceipe}></ReceipeSelector>
      {!!this.state && !!this.state.receipeFilename &&
        <ReceipePanel receipeFilename={this.state.receipeFilename}></ReceipePanel>
      }
    </>
  }
}
