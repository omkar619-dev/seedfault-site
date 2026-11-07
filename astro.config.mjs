// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Keep the HTML's spaces and line breaks exactly as written. Astro 7's
	// default ('jsx') removes line breaks between tags, which would squash
	// the history excerpt on the page onto one line.
	compressHTML: false,
});
