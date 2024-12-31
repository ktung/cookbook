import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { marked } from 'marked';

const notes = import.meta.glob('/static/notes/*.md', {
  as: 'raw',
  eager: true,
});

export const load: PageLoad = async ({ params, fetch }) => {
  const path = `/static/notes/${params.slug}.fr.md`;
  const content = notes[path];

  if (!content) {
    throw error(404, `Note ${params.slug} not found`);
  }

  return {
    title: 'test slug',
    content: marked.parse(content),
  };
};
