import receipes from '../../assets/receipes/list.json'
import './ReceipeSelector.scoped.css'

export function ReceipeSelector() {
  return (
    <div>
      <h1>RECEIPES</h1>
      <select>
        {receipes.map(receipe => (
          <option value={receipe.filename}>{receipe.name.fr}</option>
          ))}
      </select>
    </div>
  )
}
