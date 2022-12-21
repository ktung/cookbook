import { Component } from 'react'
import './App.css'
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
    return <div className="App">
      <LanguageSelector></LanguageSelector>
      <ReceipeSelector onChange={this.onChangeReceipe}></ReceipeSelector>
      {!!this.state && !!this.state.receipeFilename && <ReceipePanel receipeFilename={this.state.receipeFilename}></ReceipePanel>}
    </div>
  }
}
