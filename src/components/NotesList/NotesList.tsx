interface NotesList {
  fr?: Array<string>;
  en?: Array<string>;
}

interface NotesListProps {
  notes: NotesList;
}

export function NotesList(props: NotesListProps) {
  if (!props.notes) {
    return null;
  }

  let notes: Array<string> = [];
  if (!!props.notes.fr) {
    notes = props.notes.fr;
  } else {
    return null;
  }

  return (
    <div>
        <h2>Notes</h2>
        <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
        </ul>
    </div>
  )
}
