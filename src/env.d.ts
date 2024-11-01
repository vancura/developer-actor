/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

/** Environment variables for the application. */
interface ImportMetaEnv {
    /** Log level for the application */
    readonly LOG_LEVEL?: 'info' | 'warning' | 'error';
}

/** Import meta interface for the application. */
interface ImportMeta {
    /** Environment variables for the application */
    readonly env: ImportMetaEnv;
}
