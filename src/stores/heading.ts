import { atom } from 'nanostores';

import type { HeadingEntry } from '../types';

/**
 * Store for managing table of contents headings.
 *
 * @constant headingStore
 */
export const headingStore = atom<HeadingEntry[]>([]);
