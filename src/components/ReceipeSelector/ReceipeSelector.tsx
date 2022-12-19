import { useState } from 'react'
import receipes from '../../assets/receipes/list.json'
import css from './ReceipeSelector.module.css'

interface ReceipeSelectorProps {
  onChange: any
}

export function ReceipeSelector(props: ReceipeSelectorProps) {
  const [receipeName, setReceipeName] = useState('');

  const handleChange = (ev: any) => {
    setReceipeName(ev.target.value);
    props.onChange(ev.target.value);
  }

  return (
    <div className={css['receipe-selector']}>
      <h1>RECEIPES</h1>
      <select onChange={handleChange} value={receipeName}>
        {receipes.map(receipe => (
          <option key={receipe.filename} value={receipe.filename}>{receipe.name.fr}</option>
        ))}
      </select>
    </div>
  )
}
