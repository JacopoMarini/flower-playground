import { FlowerField } from "@stackhouseos/flower-react";
import { DatePicker as AntDatepicker, ConfigProvider } from "antd";
import locale from "antd/locale/it_IT";
import dayjs from "dayjs";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";
import { DatepickerProps } from "./types";

import "dayjs/locale/it";

export const Datepicker = ({
  id,
  validate,
  alwaysDisplay,
  label,
  rules,
  placeholder,
}: DatepickerProps) => {
  return (
    <ConfigProvider locale={locale}>
      <FlowerField
        id={id}
        validate={validate}
        alwaysDisplay={alwaysDisplay}
        rules={rules}
      >
        {({ value = "", onChange, hidden }) => {
          return (
            <Stack direction="column" gap="16">
              <Text variant="h5">{label}</Text>
              <AntDatepicker
                value={value ? dayjs(value, "DD/MM/YYYY") : undefined}
                disabled={hidden}
                placeholder={placeholder}
                format={"DD/MM/YYYY"}
                onChange={(value) =>
                  onChange(value ? dayjs(value).format("DD/MM/YYYY") : "")
                }
                style={{ height: "40px" }}
              />
            </Stack>
          );
        }}
      </FlowerField>
    </ConfigProvider>
  );
};
