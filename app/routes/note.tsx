import type { Route } from "./+types/note";

export async function loader({ params }: Route.LoaderArgs) {
}

export default function Note({params}: Route.ComponentProps) {
  return <div>Note</div>;
}