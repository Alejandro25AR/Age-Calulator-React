import { RefObject } from "react";
/* Components */
import { Button, Input } from "@/components/atoms";

interface Props {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  refButton: RefObject<HTMLButtonElement>;
  existError: boolean;
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
  maxlenght?: number;
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocusInput: (name:string) => void;
}

function InputGroupBtn({
  id,
  name,
  placeholder,
  value,
  maxlenght,
  inputMode,
  refButton,
  existError,
  handleClick,
  handleChange,
  handleFocusInput
}: Props) {

  const handleFocus = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    const $parent = e.target.parentElement;
    const $button = $parent?.children[1];
    $parent?.classList.remove("u-border-color-red");
    $parent?.classList.add("u-border-color-violet");
    $button?.classList.add("u-bg-violet");
    handleFocusInput(name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    const $parent = e.target.parentElement;
    const $button = $parent?.children[1];
    $parent?.classList.remove("u-border-color-violet");
    $button?.classList.remove("u-bg-violet");
    if(existError) {
      $parent?.classList.add("u-border-color-red");
    }
  };

  return (
    <div
      className={`m-input-group-btn ${existError ? 'u-border-color-red' : ''} }`}
      onFocus={(e) => handleFocus(e)}
      onBlur={(e) => handleBlur(e)}
    >
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
        maxlength={maxlenght}
        handleChange={handleChange}
        handleFocus={handleFocusInput}
        inputMode={inputMode}
        existError={existError}
      />
      <Button
        variant="icon"
        icon="Arrow"
        handleClick={handleClick}
        refButton={refButton}
        title={`open values ${name}`}
      />
    </div>
  );
}

export default InputGroupBtn;
