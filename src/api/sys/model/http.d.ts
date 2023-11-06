export interface HttpResponse {
  code?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  message?: string
  type?: 'success' | 'error'
}
