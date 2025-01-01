module.exports = {
  parser: 'vue-eslint-parser', // 使用 vue-eslint-parser 解析 Vue 文件
  parserOptions: {
    // 解析器的选项
    parser: '@typescript-eslint/parser', // 使用 @typescript-eslint/parser 解析 TypeScript 文件
    ecmaVersion: 2022, // ECMAScript 版本
    sourceType: 'module', // 模块类型
    ecmaFeatures: {
      // ECMAScript 特性
      jsx: true, // 支持解析 JSX 语法
    },
  },
  extends: [
    // 继承的规则
    'plugin:vue/vue3-recommended', // 继承 Vue 3 的推荐规则
    'plugin:@typescript-eslint/recommended', // 继承 TypeScript 的推荐规则
    'prettier', // 继承 Prettier 的规则
    'plugin:prettier/recommended', // 继承 Prettier 的推荐规则
  ],
  rules: {
    // 在这里添加你的自定义规则
    '@typescript-eslint/no-unused-vars': 'on', // 关闭未使用变量的警告
    'vue/multi-word-component-names': 'on', // 关闭组件名称必须为多单词的规则
    'vue/no-unused-components': 'on', // 关闭未使用组件的警告
    'vue/no-unused-vars': 'on', // 关闭未使用变量的警告
    'vue/no-deprecated-slot-attribute': 'on', // 关闭已弃用的 slot 属性的警告
    'vue/no-deprecated-v-on-native-modifier': 'on', // 关闭已弃用的 v-on.native 修饰符的警告
    'vue/no-deprecated-v-on-event-modifiers': 'on', // 关闭已弃用的 v-on 事件修饰符的警告
    'vue/no-deprecated-v-is': 'on', // 关闭已弃用的 v-is 指令的警告
    'vue/no-deprecated-slot-props': 'on', // 关闭已弃用的 slot 属性的警告
    'vue/no-deprecated-v-on-native-modifier': 'on', // 关闭已弃用的 v-on.native 修饰符的警告
    'vue/no-deprecated-v-on-event-modifiers': 'on', // 关闭已弃用的 v-on 事件修饰符的警告
  },
  // ESLint 9.x 开始，--ext 选项已经被废弃。你需要在配置文件中使用 files 属性来指定要检查的文件类型。
  files: ['&zwnj;**/*.js', '**&zwnj;/*.ts'],
  ignores: ['node_modules/', 'dist/', 'public/', 'index.html', 'src/assets/'], // 忽略的文件或文件夹
};
