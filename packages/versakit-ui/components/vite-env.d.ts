/// <reference types="vite/client" />
/// <reference types="unplugin-vue-macros/macros-global" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<any, NonNullable<unknown>, any>
  export default component
}
