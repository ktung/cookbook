import { useTranslation } from "react-i18next";

type LanguageList = {
  en: { nativeName: string; flag: string };
  "fr-FR": { nativeName: string; flag: string };
  "fr-CA": { nativeName: string; flag: string };
};

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const lngs: LanguageList = {
    en: { nativeName: "English", flag: "en" },
    "fr-FR": { nativeName: "Français", flag: "fr" },
    "fr-CA": { nativeName: "Français canadien", flag: "qc" },
  };

  return (
    <div className="mr-2 flex justify-end space-x-4">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}>
          <img
            className={`${
              i18n.resolvedLanguage === lng ? "w-14" : "w-10"
            } mt-2`}
            src={`lang/${lngs[lng as keyof LanguageList].flag}.svg`}
            alt={lngs[lng as keyof LanguageList].flag}
          />
        </button>
      ))}
    </div>
  );
}
