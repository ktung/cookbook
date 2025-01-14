import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { marked } from 'marked';
import { currentLanguage } from '$lib/services/language-util';
import sanitizeHtml from 'sanitize-html';

const notesFr = import.meta.glob('/static/notes/fr/*.md', {
  as: 'raw',
  eager: true,
});

const notesEn = import.meta.glob('/static/notes/en/*.md', {
  as: 'raw',
  eager: true,
});

export const load: PageLoad = async ({ params }) => {
  const currentLang = currentLanguage();

  const path = `/static/notes/${currentLang}/${params.slug}.md`;
  let content;
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
