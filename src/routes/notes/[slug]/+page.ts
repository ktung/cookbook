import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { currentLanguage } from '$lib/services/language-util';
import type { PageLoad } from './$types';

const notesFr = import.meta.glob('/static/notes/fr/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const notesEn = import.meta.glob('/static/notes/en/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const load: PageLoad = async ({ params }) => {
  const currentLang = currentLanguage();

  const path = `/static/notes/${currentLang}/${params.slug}.md`;
  let content: string;
  if (currentLang === 'fr') {
    content = notesFr[path];
  } else {
    content = notesEn[path];
  }

  if (!content) {
    throw error(404, `Note ${params.slug} not found`);
  }

  return {
    title: 'test slug',
    content: sanitizeHtml(marked.parse(content) as string),
  };
};
