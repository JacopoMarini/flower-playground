import { useFlower } from "@stackhouseos/flower-react";
import { JSXElementConstructor, useCallback } from "react";

export type FlowerProps = Partial<{
  onClick?: () => void;
  actionType?: string;
  flowName?: string;
  nodeId?: string;
  route?: string;
}>;

const actions = {
  next: "onNext",
  prev: "onPrev",
  node: "onNode",
  prevNode: "onPrevNode",
};

export function withOnPress<T extends FlowerProps>(
  WrappedComponent: JSXElementConstructor<T>
) {
  return function ComponentWithOnPressLogic(props: T) {
    const { flowName, nodeId: currentNode, ...flowerActions } = useFlower();

    const { onClick: onClickSource, actionType, nodeId, route } = props;
    console.log("🚀 ~ ComponentWithOnPressLogic ~ nodeId:", nodeId);

    const onAction = useCallback(() => {
      if (onClickSource) {
        onClickSource();
      }

      const currentActions = actions[actionType as keyof typeof actions];

      const currentFlowerActions = flowerActions[
        currentActions as keyof typeof flowerActions
      ] as (params: Record<string, unknown> | string) => void;

      if (actionType && currentActions && currentFlowerActions) {
        const payload =
          actionType === "prev"
            ? flowName
            : {
                flowName,
                node: nodeId,
                route,
              };
        currentFlowerActions(payload);
      }
    }, [flowName, actionType, nodeId, route, onClickSource, flowerActions]);

    return <WrappedComponent {...props} onClick={onAction} />;
  };
}
