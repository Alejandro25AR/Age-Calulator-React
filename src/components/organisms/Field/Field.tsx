import { useRef } from "react";
/* Custom hooks */
import { usePopup } from "@/hooks";
// Components
import { Input, LabelMemo, Popup, SpanMemo } from "@/components/atoms";
import { InputGroupBtn, RadioButtonList } from "@/components/molecules";

interface Props {
  id: string;
  name: string;
  value: string;
  contentLabel: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, value?:string) => void;
  handleFocus: (name: string) => void;
  errorMessage?: string;
  variant?: "InputGroupBtn";
  dataList?: Array<number | string>;
  variantList?: "3-column" | "7-column";
  variantItemList?: "small";
  maxLength?: number;
  inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
}

function Field({
  id,
  name,
  placeholder,
  contentLabel,
  variant,
  dataList,
  variantList,
  variantItemList,
  value,
  maxLength,
  inputMode,
  errorMessage,
  handleChange,
  handleFocus
}: Props) {
  const refButtonTogglePopup = useRef<HTMLButtonElement>(null);

  const [popup, hidePopup, togglePopup] = usePopup();

  return (
    <div className="o-field">
      <LabelMemo htmlFor={id} content={contentLabel} />
      {variant ? (
        <InputGroupBtn
          id={id}
          name={name}
          placeholder={placeholder}
          handleClick={togglePopup}
          handleChange={handleChange}
          handleFocusInput={handleFocus}
          value={value}
          maxlenght={maxLength}
          inputMode={inputMode}
          refButton={refButtonTogglePopup}
          existError={errorMessage!==""}
        />
      ) : (
        <Input
          id={id}
          value={value}
          name={name}
          placeholder={placeholder}
          variant="with-border"
          handleChange={handleChange}
          maxlength={maxLength}
          existError={errorMessage!==""}
          inputMode={inputMode}
          handleFocus={handleFocus}
        />
      )}

      {errorMessage && <SpanMemo content={errorMessage} variant="small-red" />}
      
      {variant && dataList && popup ? (
        <Popup statePopup={popup} hidePopup={hidePopup} refButton={refButtonTogglePopup}>
          <RadioButtonList
            items={dataList}
            name={name}
            handleChange={handleChange}
            value={value}
            variant={variantList}
            variantItem={variantItemList}
            statePopup={popup}
            togglePopup={togglePopup}
          />
        </Popup>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Field;
