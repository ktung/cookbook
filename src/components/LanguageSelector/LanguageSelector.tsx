import { useTranslation } from "react-i18next";

type LanguageList = {
  en: { nativeName: string },
  fr: { nativeName: string },
}

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const lngs: LanguageList = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' }
  };

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  )
}
