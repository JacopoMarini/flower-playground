import { Steps } from 'antd'
import { StepperProps } from './types'

export const Stepper = ({ current, items, direction = 'horizontal' }: StepperProps) => {
  return <Steps direction={direction} current={Number(current)} items={items} />
}
