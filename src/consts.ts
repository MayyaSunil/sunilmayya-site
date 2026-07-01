// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Sunil Mayya';
export const SITE_DESCRIPTION =
	'Firefox engineer at Mozilla, writing about browser internals, web standards, recipes, and life outside the editor.';

export const AUTHOR_EMAIL = 'sunilmayya@gmail.com';

// Content sections. Each blog post declares a `category` that maps here, and
// each section gets its own listing page at `/<slug>`.
export const SECTIONS = [
	{
		slug: 'field-notes',
		category: 'technical',
		title: 'Field Notes',
		description:
			"What I'm building and thinking about at Mozilla — browser internals, networking, and web standards, explained from the inside.",
	},
	{
		slug: 'recipes',
		category: 'recipes',
		title: 'Recipes',
		description:
			'Food I keep coming back to, experiments that worked, and the occasional flop worth learning from.',
	},
	{
		slug: 'banter',
		category: 'banter',
		title: 'Banter',
		description:
			'Life in general — family, Nuremberg, and whatever else happens to be on my mind.',
	},
] as const;
