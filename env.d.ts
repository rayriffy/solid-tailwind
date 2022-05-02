/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BUILD_NUMBER: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
