import { useTranslation } from "react-i18next";

interface RecipeLinkProps {
  link?: {
    fr?: string;
    en?: string;
  };
}

export function RecipeLink(props: RecipeLinkProps) {
  const { i18n, t } = useTranslation();

  if (!props.link) {
    return null;
  }

  return (
    <div className="text-center">
      {i18n.language.includes("fr") && !!props.link.fr && (
        <a href={props.link.fr}>{t("link")}</a>
      )}
      {i18n.language.includes("en") && !!props.link.en && (
        <a href={props.link.en}>{t("link")}</a>
      )}
    </div>
  );
}
