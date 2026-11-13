import { Button } from "@/components/shared/Button";
import { Icon } from "@/components/shared/Icon";
import { Tooltip } from "@/components/shared/Tooltip";
import { useTheme } from "@/hooks/useTheme";

export function ThemeButton() {
  const { current, changeTheme } = useTheme();

  return (
    <Tooltip text={`Theme: ${current.label}. Click to change.`} alignment="end">
      <Button variant="plain" label={`Theme: ${current.label}`} onClick={changeTheme}>
        <Icon shape={current.icon} />
      </Button>
    </Tooltip>
  );
}
