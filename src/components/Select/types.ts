import { FlowerFieldProps } from '@stackhouseos/flower-react'
import { SelectProps as AntProps } from 'antd'

export type SelectProps = {
  label: string
  placeholder?: string
  options: AntProps['options']
} & Omit<FlowerFieldProps, 'children'>
