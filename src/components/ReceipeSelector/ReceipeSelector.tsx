import receipes from '../../assets/receipes/list.json'
import css from './ReceipeSelector.module.css'

export function ReceipeSelector() {
  return (
    <div className={css['receipe-selector']}>
      <h1>RECEIPES</h1>
      <select>
        {receipes.map(receipe => (
          <option key={receipe.filename} value={receipe.filename}>{receipe.name.fr}</option>
        ))}
      </select>
    </div>
  )
}
