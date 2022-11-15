import "./Badge.scss";
import { ReactNode } from "react";
import { BadgeLabel } from "../../types/types";
import { Color } from "../../types/types";

export interface IBadgeProps {
  color: Color;
  badgeLabel: BadgeLabel;
  children: ReactNode;
}

export const Badge = ({ color, badgeLabel, children }: IBadgeProps) => {
  return (
    <span className={`badge text-bg-${color}`}>
      {badgeLabel}
      {children}
    </span>
  );
};
