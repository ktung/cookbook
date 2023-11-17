import { useTranslation } from "react-i18next";

interface NotesList {
  fr?: Array<string>;
  en?: Array<string>;
}

interface NotesListProps {
  notes: NotesList;
}

export function NotesList(props: NotesListProps) {
  const { i18n, t } = useTranslation();

  if (!props.notes) {
    return null;
  }

  const language = i18n.resolvedLanguage?.substring(0, 2);

  let notes: string[] | undefined;
  if (language == "en") {
    notes = props.notes.en;
  } else {
    notes = props.notes.fr;
  }

  if (!notes) {
    return null;
  }

  return (
    <div className="mt-2 rounded-lg text-center">
      <h2 className="text-xl">{t("notes")}</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
