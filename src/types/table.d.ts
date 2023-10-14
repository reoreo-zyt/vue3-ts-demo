import { renderContent } from 'element-plus'
/**
 * 表单项
 */
export default interface TableColumn {
  value: string
  text: string
  sortable: string | boolean
  width: string | number | undefined
  formatter: formatter
  render: renderContent
  img: string
  switch: boolean
  slotName: string
  isCopy: boolean
  items: items
}
