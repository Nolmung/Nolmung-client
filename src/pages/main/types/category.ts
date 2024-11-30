import { AllCategory } from "@/common/types";

export type CategoryOptionType = {
  value: AllCategory;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[];