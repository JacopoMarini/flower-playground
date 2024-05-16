import { FlowerFieldProps } from '@stackhouseos/flower-react'

export type InputProps = {
  label?: string
  placeholder?: string
  variant?: 'search' | 'textarea' | 'password'
  onSearch?: (value: string) => void
} & Omit<FlowerFieldProps, 'children'>
