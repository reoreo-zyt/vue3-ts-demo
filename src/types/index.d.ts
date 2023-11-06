// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

declare type TargetContext = '_self' | '_blank'

export type Nullable<T> = T | null

export type CssStyleObject = Partial<CSSStyleDeclaration> &
  Record<string, string | null>
