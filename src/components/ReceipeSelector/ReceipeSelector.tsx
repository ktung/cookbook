import { ChangeEvent, useEffect, useState } from 'react'
import receipesList from '../../assets/receipes/list.json'
import css from './ReceipeSelector.module.css'
import { useTranslation } from "react-i18next";

interface ReceipeSelectorProps {
  onChange: any
}

export function ReceipeSelector(props: ReceipeSelectorProps) {
  const { t } = useTranslation();

  const [receipeName, setReceipeName] = useState('');

  useEffect(() => {
    if (receipeName === '') {
      setReceipeName(() => {
        return receipesList[0].filename;
      });
      props.onChange(receipesList[0].filename);
    }
  }, [receipeName]);

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    ev.preventDefault();
    setReceipeName(() => {
      props.onChange(ev.target.value);
      return ev.target.value;
    });
  }

  return (
    <div className={`${css['receipe-selector']} w-2/4 mx-auto`}>
      <h1>{t('receipes')}</h1>
      <select onChange={handleChange} defaultValue={receipeName}>
        {receipesList.map(receipe => (
          <option key={receipe.filename} value={receipe.filename}>{receipe.name.fr}</option>
        ))}
      </select>
    </div>
  )
}
