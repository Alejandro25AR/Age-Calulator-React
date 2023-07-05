import { useCallback } from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  variant?: "with-border";
  readonly?: boolean;
  disabled?: boolean;
  maxlength?: number;
  inputMode?:
  | "search"
  | "text"
  | "none"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | undefined;
  existError?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e:React.FocusEvent<HTMLInputElement>) => void;
}

function Input({
  id,
  value,
  placeholder,
  name,
  variant,
  maxlength,
  inputMode,
  existError,
  handleChange,
  handleFocus,
}: Props) {
  const className = variant ? "a-input--" + variant : "a-input";

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      e.preventDefault();
    }
  },[]);

  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      name={name}
      className={className + (existError ? " u-border-color-red" : '')}
      maxLength={maxlength}
      inputMode={inputMode}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
    />
  );
}

export default Input;