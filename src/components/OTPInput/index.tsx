import { FlowerField } from "@stackhouseos/flower-react";
import { Input, InputRef } from "antd";
import { useCallback, useRef, useState } from "react";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";
import { OTPInputProps } from "./types";

const keyMaps = {
  ArrowLeft: (index: number) => index - 1,
  ArrowRight: (index: number) => index + 1,
};

export const OTPInput = ({
  id,
  validate,
  alwaysDisplay,
  label,
  rules,
  length = 6,
}: OTPInputProps) => {
  const [error, setError] = useState(false);

  const sections = [...new Array(length)];
  const ref = useRef;
  const inputRefs = sections.map(() => ref<InputRef>(null));

  const handleBlur = useCallback(
    (value: string, hasError?: boolean) => {
      if ([...value].filter((value) => value !== "-").length === length)
        setError(!!hasError);
    },
    [length]
  );

  const changeFocus = useCallback(
    (index: number, key: string) => {
      const newIndex = keyMaps[key as keyof typeof keyMaps]?.(index);
      inputRefs[newIndex]?.current?.focus();
    },
    [inputRefs]
  );

  const handleChange = useCallback(
    (
      item: string,
      index: number,
      currentValue: string,
      onChange: (value: string) => void
    ) => {
      if (item && isNaN(Number(item))) return;
      if (
        !index &&
        item.length === length &&
        [...item].every((code) => !isNaN(Number(code)))
      ) {
        onChange(item);
        return;
      }
      const newValue = [...currentValue];
      newValue[index] = item || "-";
      onChange(newValue.join(""));
      if (item)
        setTimeout(() => {
          inputRefs[index + 1]?.current?.focus();
        }, 100);
      if (newValue.filter((value) => value !== "-").length === length) {
        inputRefs[index]?.current?.blur();
        return;
      }
      setError(false);
    },
    [inputRefs, length]
  );
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
        const arrayValues = [...value].map((code) =>
          code !== "-" ? code : ""
        );
        return (
          <Stack direction="column" gap="16">
            <Text variant="h5">{label}</Text>
            <Stack gap={8}>
              {sections.map((item, index) => (
                <Input
                  key={index}
                  value={arrayValues[index]}
                  ref={inputRefs[index]}
                  onKeyDown={({ key }) => changeFocus(index, key)}
                  maxLength={1}
                  onChange={({ target }) =>
                    handleChange(target.value, index, value, onChange)
                  }
                  onBlur={() => handleBlur(value, hasError)}
                />
              ))}
            </Stack>
            {error && <Text color="error">Codice OTP non valido !</Text>}
          </Stack>
        );
      }}
    </FlowerField>
  );
};
