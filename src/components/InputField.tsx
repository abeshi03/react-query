/* --- ライブラリー ---------------------------------------------------------------------------------------------------- */
import React, { memo, FC } from "react";


/* --- アセット ------------------------------------------------------------------------------------------------------- */
import styles from "./InputField.module.scss";

/* --- 子コンポーネント ------------------------------------------------------------------------------------------------- */
import { InputLabel } from "./InputLaval";

type InputFiledType = "text" | "password" | "email";

type Props = {
  label?: string;
  placeholder?: string;
  type: InputFiledType;
  required: boolean;
  guidance?: string;
  disabled?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  className?: string;
  inputProps: React.HTMLAttributes<HTMLInputElement>;
}


export const InputField: FC<Props> = memo((props) => {

  const {
    label,
    placeholder,
    type,
    required,
    guidance,
    disabled = false,
    defaultValue,
    autoComplete,
    className,
    inputProps
  } = props;

  return (
    <div className={styles.inputFieldContainer}>

      <InputLabel
        required={required}
        label={label}
      />

      <input
        { ...inputProps }
        className={`${className} ${styles.inputField}`}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {guidance && <p className={styles.guidance}>{guidance}</p>}
    </div>
  );
});

InputField.displayName = "InputField"
