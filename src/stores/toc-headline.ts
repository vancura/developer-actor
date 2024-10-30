import { atom } from 'nanostores';

import type { TocHeadline } from '../types';

/**
 * Store for managing table of contents headlines.
 * @const tocHeadlineStore
 */
export const tocHeadlineStore = atom<TocHeadline[]>([]);
