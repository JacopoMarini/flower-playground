import { PropsWithChildren } from 'react'

export type TextProps = PropsWithChildren<{
  text?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  color?: TextColor
  className?: string
  ellipsis?: boolean
}>

export type TextColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
