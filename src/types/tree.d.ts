/**
 * 菜单项树结构
 */
export default interface TreeItem {
  /**
   * 菜单名称
   */
  name: string
  /**
   * 菜单路径
   */
  path: string
  /**
   * 菜单的图标
   */
  icon?: string
  /**
   * 子菜单
   */
  children?: TreeItem[]
}
