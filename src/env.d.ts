declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: ComponentOptions | ComponentOptions['setup'];
  export default component;
}
declare var window: Window;
