export interface ButtonStyleProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
}

export interface ButtonProps extends ButtonStyleProps {
  label: string;
  onClick: () => void;
}
