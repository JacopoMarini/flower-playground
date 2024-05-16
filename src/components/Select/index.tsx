import { FlowerField } from "@stackhouseos/flower-react";
import { Select as AntSelect } from "antd";
import { useCallback, useState } from "react";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { SelectProps } from "./types";

export const Select = ({
  id,
  validate,
  alwaysDisplay,
  label,
  rules,
  placeholder,
  options,
}: SelectProps) => {
  const [error, setError] = useState(false);

  const handleBlur = useCallback((hasError?: boolean) => {
    setError(!!hasError);
  }, []);
  return (
    <FlowerField
      id={id}
      validate={validate}
      alwaysDisplay={alwaysDisplay}
      rules={rules}
    >
      {({ errors, value = "", onChange, onBlur, hidden, hasError }) => {
        return (
          <Stack direction="column" gap="16">
            <Text variant="h5">{label}</Text>
            <AntSelect
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              onBlur={() => handleBlur(hasError)}
              allowClear
              style={{ height: "40px" }}
              options={options}
            />
            {error &&
              errors?.map((message: string) => (
                <Text color="error">{message}</Text>
              ))}
          </Stack>
        );
      }}
    </FlowerField>
  );
};
