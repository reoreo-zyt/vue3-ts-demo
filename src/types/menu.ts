/**
 * 菜单项
 */
export interface MenuItem {
  /**
   * 菜单名称
   */
  title: string
  /**
   * 菜单编码
   */
  code: string
  /**
   * 菜单的图标
   */
  icon?: string
  /**
   * 子菜单
   */
  children?: MenuItem[]
}
