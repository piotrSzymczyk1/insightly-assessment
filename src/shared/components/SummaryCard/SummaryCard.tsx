import { Widget } from "@/shared/components/Widget/Widget";
import styles from "./SummaryCard.module.css";
import type { SummaryCardProps } from "./SummaryCard.types";

export const SummaryCard = ({ icon, label, value, mood }: SummaryCardProps) => {
  return (
    <Widget>
      <div className={styles.label}>
        <span aria-hidden="true">{icon}</span>
        <span>{label}</span>
      </div>

      <strong className={styles.value} data-mood={mood}>
        {value}
      </strong>
    </Widget>
  );
};
