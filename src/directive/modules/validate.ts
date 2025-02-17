/**
 * 在不使用 el-form 的时候增加校验
 */
import type { Directive, DirectiveBinding } from 'vue';

interface ElType extends HTMLElement {
  __handleClick__: () => any;
  disabled: boolean;
}

const validate: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function';
    }
    const inputElement = el.querySelector('input');
    if (!inputElement) return;

    inputElement.addEventListener('blur', () => {
      const value = inputElement.value;
      if (binding.value(value)) {
        // 这里调用传递的校验函数
        inputElement.classList.add('is-valid'); // 添加有效的样式
        inputElement.classList.remove('is-invalid'); // 移除无效的样式
      } else {
        inputElement.classList.add('is-invalid'); // 添加无效的样式
        inputElement.classList.remove('is-valid'); // 移除有效的样式
      }
    });
  },
};

export default validate;
