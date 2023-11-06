export type ComponentType =
  | 'cascader'
  | 'checkbox'
  | 'checkbox-group'
  | 'checkbox-button'
  | 'color-picker'
  | 'date-picker'
  | 'input'
  | 'input-number'
  | 'radio'
  | 'radio-group'
  | 'radio-button'
  | 'rate'
  | 'select'
  | 'option'
  | 'slider'
  | 'switch'
  | 'time-picker'
  | 'time-select'
  | 'transfer'
  | 'upload'
  | 'editor'

export type UploadComponent = {
  // 上传链接
  action?: string
  // 请求头
  headers?: object
  // 请求方式
  method?: 'post' | 'put' | 'patch'
  // 是否多文件
  multiple?: boolean
  // 数据
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // 文件名
  name?: string
  withCredentials?: boolean
  showFileList?: boolean
  // 拖拽功能是否开户
  drag?: boolean
  // 接受的文件类型
  accept?: string
  // 文件列表
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fileList?: any[]
  listType?: 'text' | 'picture' | 'picture-card'
  autoUpload?: boolean
  disabled?: boolean
  // 限制文件数量
  limit?: number
  type?: 'button' | 'icon'
  btnType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  text?: string
  class?: string
  icon?: string
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void
  onRemove?: (file: UploadFile, fileList: UploadFile[]) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: (response: any, file: UploadFile, fileList: UploadFile[]) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (error: any, file: UploadFile, fileList: UploadFile[]) => void
  onProgress?: (
    evt: UploadProgressEvent,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any,
    file: UploadFile,
    fileList: UploadFile[],
  ) => void
  onPreview?: (file: UploadFile) => void
  beforeUpload?: (
    file: UploadRawFile,
  ) => Awaitable<void | undefined | null | boolean | File | Blob>
  beforeRemove?: (
    uploadFile: UploadFile,
    uploadFiles: UploadFiles,
  ) => Awaitable<boolean>
  httpRequest?: UploadRequestHandler
  onExceed?: (files: File[], uploadFiles: UploadFiles) => void
}

export type FormSchema = {
  // 三种类型
  component: ComponentType | 'innerText' | Component
  // 默认值
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
  // 标签文本
  label?: string
  // 属性
  prop: string
  // 用于栅栏结构
  span?: number
  // element组件 slot，可以定义多个
  slot?: string | string[]
  // 当前组件的slot -> 针对 input 组件重新设计
  itemSlot?: string | { [key: string]: string }
  // 校验规则
  rules?: RuleItem[]
  // 额外绑定到item上的属性
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attrs?: any
  // 子组件
  children?: Partial<FormSchema>[]
  // item上的事件绑定
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events?: any
  // 额外的class
  class?: string
  // 额外的style属性
  style?: CSSProperties
  // 上传组件
  upload?: UploadComponent
}

export type FormActionType = {
  submit: () => Promise<void>
  validate: (
    callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void,
  ) => Promise<void>
  validateField: (
    props?: Arrayable<FormItemProp>,
    callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void,
  ) => Promise<void>
  resetFields: (props?: Arrayable<FormItemProp>) => void
  scrollToField: (props: FormItemProp) => void
  clearValidate: (props?: Arrayable<FormItemProp>) => void
}
