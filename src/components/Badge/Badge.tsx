import { BadgeLabel } from "../../types/types";
import { Color } from "../../types/types";

export interface IBadgeProps {
  color: Color;
  badgeLabel: BadgeLabel;
  count: number;
}

export const Badge = ({ color, badgeLabel, count }: IBadgeProps) => {
  return (
    <span className={`badge text-bg-${color}`}>
      {badgeLabel}: {count}
    </span>
  );
};
