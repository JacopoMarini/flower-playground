import { Divider as AntDivider } from 'antd'
import { DividerProps } from './types'

export const Divider = ({ direction, dashed, orientation }: DividerProps) => {
  return (
    <AntDivider
      type={direction}
      dashed={dashed}
      orientation={orientation}
      style={{ borderColor: '#FFF' }}
    />
  )
}
