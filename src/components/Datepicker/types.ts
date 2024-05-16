import { FlowerFieldProps } from '@stackhouseos/flower-react'

export type DatepickerProps = {
  label: string
  placeholder?: string
} & Omit<FlowerFieldProps, 'children'>
