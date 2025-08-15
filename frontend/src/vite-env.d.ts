/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_DOC_API: string;
  readonly VITE_ML_DOC_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
