import { styled } from 'styled-components'
import { StackProps } from './types'

export const StyledStack = styled.div<StackProps>`
  display: flex;
  width: ${({ width }) => width ?? '100%'};
  padding: ${({ padding }) => padding ?? 0};
  height: ${({ height }) => height ?? 'max-content'};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  row-gap: ${({ rowGap, gap }) => `${gap || rowGap ? Number(gap ?? rowGap) : 0}px`};
  column-gap: ${({ columnGap, gap }) =>
    `${gap || columnGap ? Number(gap ?? columnGap) : 0}px`};
`
