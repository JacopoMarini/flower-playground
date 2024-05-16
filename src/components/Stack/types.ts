import { CSSProperties, PropsWithChildren } from 'react'

export type StackProps = PropsWithChildren<{
  direction?: CSSProperties['flexDirection']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: number | string
  rowGap?: number | string
  columnGap?: number | string
  width?: string
  height?: string
  padding?: string
}>
