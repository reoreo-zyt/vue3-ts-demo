declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: ComponentOptions | ComponentOptions['setup'];
  export default component;
}
declare module '*.ts'
declare module 'postcss-px-to-viewport';
