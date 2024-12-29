import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";
import { RecipePanel } from "./components/RecipePanel/RecipePanel";

export function App() {
  const { i18n } = useTranslation();
  i18n.on("languageChanged", (lng) => {
    document.documentElement.setAttribute("lang", lng);
  });

  return (
    <>
      <header className="mb-16">
        <LanguageSelector></LanguageSelector>
        <h1 className="my-2 text-center font-mono text-3xl">Cookbook</h1>
      </header>

      <RecipePanel></RecipePanel>
      <footer className="my-2 text-center"><a target="_blank" href="https://github.com/ktung/cookbook/">Github</a></footer>
    </>
  );
}
