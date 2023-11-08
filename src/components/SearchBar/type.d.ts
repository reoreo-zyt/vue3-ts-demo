export interface Search {
  /** 表单文本 label */
  label: string
  /**
   * 表单可选项
   * `el-input` `el-date-picker` `select-option` `select-tree`
   */
  component: string
  /** 表单提示项 */
  placeholder: string
  /** 表单绑定值 */
  value: string
  /** 自定义行内样式 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: any
}
