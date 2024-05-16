import { StyledStack } from './styled'
import { StackProps } from './types'

export const Stack = ({ children, ...props }: StackProps) => {
  return <StyledStack {...props}>{children}</StyledStack>
}
