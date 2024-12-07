import { ReactNode } from 'react';

export interface ButtonStyleProps {
  label?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
  disabled?: boolean;
  border?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}

export interface ButtonProps extends ButtonStyleProps {
  children?: ReactNode;
  onClick: () => void;
}
