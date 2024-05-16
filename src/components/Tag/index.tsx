import { Tag as AntTag } from 'antd'
import { TagProps } from './types'

export const Tag = ({ title, color }: TagProps) => {
  return (
    <AntTag color={color} style={{ fontSize: 16, padding: '4px 8px' }}>
      {title}
    </AntTag>
  )
}
