export type RowFieldProps = {
  variant: "name" | "row";
  value: string;
  placeholder: string;
  shouldFocus: boolean;
  onChange: (value: string) => void;
  onEnter: (input: HTMLInputElement) => void;
  onBackspaceWhenEmpty?: () => void;
  onFocus: () => void;
};
