import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type HeaderTitleType = {
  title: string;
  showIcon: boolean;
  type: number;
};
