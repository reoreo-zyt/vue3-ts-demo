import { type App } from 'vue';
import validate from './modules/validate';

// 自定义指令
const directivesList: any = {
  // Custom directives
  validate,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;
