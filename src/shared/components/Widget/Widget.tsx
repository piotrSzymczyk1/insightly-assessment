import styles from "./Widget.module.css";
import type { WidgetProps } from "./Widget.types";

export const Widget = ({ children, className = "" }: WidgetProps) => {
  return (
    <section className={`${styles.widget} ${className}`}>{children}</section>
  );
};
