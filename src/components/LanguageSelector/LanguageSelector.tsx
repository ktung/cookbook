import { useTranslation } from "react-i18next";

type LanguageList = {
  en: { nativeName: string },
  "fr-FR": { nativeName: string },
  "fr-CA": { nativeName: string },
}

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const lngs: LanguageList = {
    en: { nativeName: 'English' },
    "fr-FR": { nativeName: 'Français' },
    "fr-CA": { nativeName: 'Français canadien' }
  };

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng as keyof LanguageList].nativeName}
        </button>
      ))}
    </div>
  )
}
