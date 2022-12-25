import { Component } from 'react'
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'
import { ReceipePanel } from './components/ReceipePanel/ReceipePanel'


export class App extends Component {

  render() {
    return <>
      <header className='mb-16'>
        <LanguageSelector></LanguageSelector>
        <h1 className='text-center my-2 text-3xl font-mono'>Bread Receipes</h1>
      </header>

      <ReceipePanel></ReceipePanel>
    </>
  }
}
