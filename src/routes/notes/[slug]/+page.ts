import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { marked } from 'marked';
import { currentLanguage } from '$lib/services/language-util';

const notesFr = import.meta.glob('/static/notes/fr/*.md', {
  as: 'raw',
  eager: true,
});

const notesEn = import.meta.glob('/static/notes/en/*.md', {
  as: 'raw',
  eager: true,
});

export const load: PageLoad = async ({ params, fetch }) => {
  let currentLang = currentLanguage();

  const path = `/static/notes/${currentLang}/${params.slug}.md`;
  var content;
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
    content: marked.parse(content),
  };
};
