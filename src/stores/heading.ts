import { atom } from 'nanostores';

import type { HeadingEntry } from '../types';

/**
 * Store for managing table of contents headings.
 * @const headingStore
 */
export const headingStore = atom<HeadingEntry[]>([]);
