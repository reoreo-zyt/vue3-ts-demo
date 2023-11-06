import type { RouteRecordRaw } from 'vue-router'
import type { RouteMeta } from 'types/vue-router'
import { defineComponent } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}
