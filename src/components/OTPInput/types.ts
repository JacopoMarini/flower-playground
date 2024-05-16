import { FlowerFieldProps } from '@stackhouseos/flower-react'

export type OTPInputProps = {
  label: string
  length?: number
} & Omit<FlowerFieldProps, 'children'>
