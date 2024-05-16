import { FlowerRuleProps } from "@stackhouseos/flower-react";

export type ButtonProps = {
  title?: string;
  onClick?: () => void;
  actionType?: "next" | "prev" | "node" | "prevNode";
  variant?: "primary" | "default" | "link";
  nodeId?: string;
  icon?: string;
} & Partial<FlowerRuleProps>;
