export type StepperProps = {
  direction?: 'horizontal' | 'vertical'
  current: string | number
  items: {
    title: string
    description?: string
    subTitle?: string
  }[]
}
