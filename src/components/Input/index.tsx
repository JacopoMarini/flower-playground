import { FlowerField } from "@stackhouseos/flower-react";
import { Input as AntInput } from "antd";
import { useCallback, useState } from "react";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";
import { InputProps } from "./types";

const { TextArea, Search, Password } = AntInput;

const componentsMap = {
  textarea: TextArea,
  password: Password,
  search: Search,
};

export const Input = ({
  id,
  validate,
  alwaysDisplay,
  label,
  rules,
  placeholder,
  variant,
  onSearch,
}: InputProps) => {
  const [error, setError] = useState(false);
  const Component =
    componentsMap?.[variant as keyof typeof componentsMap] ?? AntInput;

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
      {({
        errors,
        value = "",
        onChange,
        onBlur,
        hidden,
        hasError,
        ...rest
      }) => {
        return (
          <Stack direction="column" gap="16">
            <Text variant="h5">{label}</Text>
            <Component
              value={variant === "search" ? undefined : value}
              disabled={hidden}
              status={hasError ? "error" : ""}
              placeholder={placeholder}
              onSearch={onSearch}
              onBlur={() => {
                onBlur();
                handleBlur(hasError);
              }}
              onChange={
                variant === "search"
                  ? () => null
                  : ({ target }) => onChange(target.value)
              }
              style={{ height: "40px" }}
            />
            {error &&
              errors?.map((message) => <Text color="error">{message}</Text>)}
          </Stack>
        );
      }}
    </FlowerField>
  );
};
