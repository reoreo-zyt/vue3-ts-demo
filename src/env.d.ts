declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: ComponentOptions | ComponentOptions['setup'];
  export default component;
}
declare module '*.ts';
declare module 'postcss-px-to-viewport';
/**
 * 平台的名称、版本、运行所需的`node`版本、依赖、构建时间的类型提示
 */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    engines: {
      node: string;
    };
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
  };
  buildTimestamp: number;
};
