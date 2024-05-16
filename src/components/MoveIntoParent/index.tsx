import { useFlower } from '@stackhouseos/flower-react'
import { useEffect, useMemo } from 'react'
import { MoveIntoParentProps } from './types'

export const MoveIntoParent = ({ actionType, destinationFlow }: MoveIntoParentProps) => {
  const { onPrev, onNext } = useFlower()

  const actions = useMemo(() => ({ onNext, onPrev }), [onNext, onPrev])

  useEffect(() => {
    actions[actionType](destinationFlow)
  }, [actions, actionType, destinationFlow])

  return null
}
