import { Button, Input } from "@/components/atoms";
import { RefObject, useState } from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  popup: boolean;
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
  hanldleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputGroupBtn({
  id,
  name,
  placeholder,
  value,
  maxlenght,
  inputMode,
  popup,
  refButton,
  existError,
  handleClick,
  hanldleChange,
}: Props) {

  const handleFocus = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    const $parent = e.target.parentElement;
    const $button = $parent?.children[1];
    $parent?.classList.add("u-border-color-violet");
    $button?.classList.add("u-bg-violet");
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    if (!popup) {
      const $parent = e.target.parentElement;
      const $button = $parent?.children[1];
      $parent?.classList.remove("u-border-color-violet");
      $button?.classList.remove("u-bg-violet");
    }
  };

  return (
    <div
      className={`m-input-group-btn ${!existError ? "u-border-color-red" : "u-border-color-gray"}`}
      onFocus={(e) => handleFocus(e)}
      onBlur={(e) => handleBlur(e)}
    >
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
        maxlength={maxlenght}
        handleChange={hanldleChange}
        inputMode={inputMode}
        existError={existError}
      />
      <Button
        variant="icon"
        icon="Arrow"
        handleClick={handleClick}
        refButton={refButton}
      />
    </div>
  );
}

export default InputGroupBtn;
