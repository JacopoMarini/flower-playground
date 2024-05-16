import { Typography } from 'antd'
import { TitleProps } from 'antd/es/typography/Title'
import { TextProps } from './types'

const { Title, Paragraph } = Typography

const ComponentMap = {
  h1: Title,
  h2: Title,
  h3: Title,
  h4: Title,
  h5: Title,
  h6: Title,
  p: Paragraph
}

export const Text = ({
  children,
  text,
  variant = 'p',
  color = 'primary',
  className,
  ellipsis
}: TextProps) => {
  const TextComponent = ComponentMap[variant]

  return (
    <TextComponent
      level={getTextLevel(variant)}
      style={{ color: colorsMap[color] }}
      className={className}
      ellipsis={ellipsis}
    >
      {text || children}
    </TextComponent>
  )
}

const getTextLevel = (variant: string) => {
  const [, level] = variant.split('h')
  return level ? ((Number(level) - 1) as TitleProps['level']) : undefined
}

const colorsMap = {
  primary: '#FFF',
  secondary: '#18191a',
  success: '#22bb33',
  error: '#ff4d4f',
  info: '#5bc0de',
  warning: '#faad14'
}
