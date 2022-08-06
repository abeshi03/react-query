/* --- ライブラリー ---------------------------------------------------------------------------------------------------- */
import React, { memo, VFC } from "react";

/* --- アセット ------------------------------------------------------------------------------------------------------- */
import styles from "./InputLabel.module.scss";

type Props = {
  label?: string;
  required: boolean;
  className?: string;
}


export const InputLabel: VFC<Props> = memo((props) => {

  const { label, required, className } = props;

  return (
    <div className={`${className} ${styles.labelAndRequiredBadge}`}>
      {label && <label htmlFor={label} className={styles.label}>{label}</label>}
      {required && <span className={styles.requiredBadge}>必須</span>}
    </div>
  );
});
