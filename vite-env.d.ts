/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_API_URL: string;
    readonly VITE_REACT_APP_API_KEY: string;
    readonly VITE_REACT_APP_WEATHER_STACK_API: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
