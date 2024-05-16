import * as Icons from "@ant-design/icons";

import { FlowerRule } from "@stackhouseos/flower-react";
import { Button as AntButton } from "antd";
import { withOnPress } from "../../utils/withOnPress";
import { ButtonProps } from "./types";

const ButtonComponent = ({
  title,
  rules,
  onClick,
  variant = "primary",
  alwaysDisplay,
  icon = "",
  ...rest
}: ButtonProps) => {
  const IconComponent = Icons?.[icon as keyof typeof Icons];
  return (
    <FlowerRule rules={rules} alwaysDisplay={alwaysDisplay}>
      <AntButton
        onClick={onClick}
        type={variant}
        style={{
          minWidth: title && "100px",
          height: "35px",
        }}
        //@ts-ignore
        icon={IconComponent ? <IconComponent /> : undefined}
      >
        {title}
      </AntButton>
    </FlowerRule>
  );
};

export const Button = withOnPress(ButtonComponent);
