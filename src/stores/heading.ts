import { atom } from 'nanostores';

import type { IHeadingEntry } from '../types';

/**
 * Store for managing table of contents headings.
 *
 * @constant headingStore
 */
export const headingStore = atom<IHeadingEntry[]>([]);
