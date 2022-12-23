import { useTranslation } from "react-i18next";

interface ReceipeLinkProps {
  link?: {
    fr?: string,
    en?: string
  }
}

export function ReceipeLink(props: ReceipeLinkProps) {
  const { i18n, t } = useTranslation();

  if (!props.link) {
    return null;
  }

  return (
    <>
      { i18n.language.includes('fr') && !!props.link.fr && <a href={props.link.fr}>{t('link')}</a> }
      { i18n.language.includes('en') && !!props.link.en && <a href={props.link.en}>{t('link')}</a> }
    </>
  )
}
