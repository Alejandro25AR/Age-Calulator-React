import { useRef } from "react";
// Components
import { Input, Label, Popup, Span } from "@/components/atoms";
import { InputGroupBtn, RadioButtonList } from "@/components/molecules";
import { usePopup } from "@/hooks";

interface Props {
  id: string;
  name: string;
  value: string;
  contentLabel: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, value?:string) => void;
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
}: Props) {
  const refButtonTogglePopup = useRef<HTMLButtonElement>(null);

  const [popup, hidePopup, togglePopup] = usePopup();

  return (
    <div className="o-field">
      <Label htmlFor={id} content={contentLabel} />
      {variant ? (
        <InputGroupBtn
          id={id}
          name={name}
          placeholder={placeholder}
          handleClick={togglePopup}
          hanldleChange={handleChange}
          value={value}
          maxlenght={maxLength}
          popup={popup}
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
        />
      )}

      {errorMessage && <Span content={errorMessage} variant="small-red" />}
      
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
