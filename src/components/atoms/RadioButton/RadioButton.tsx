import { useRef } from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  content: string;
  statePopup: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) => void;
  togglePopup: () => void;
  maxLength?: number;
  variant?: "small";
}

function RadioButton({
  id,
  name,
  value,
  content,
  handleChange,
  variant,
  statePopup,
  togglePopup,
}: Props) {
  const className = variant ? "a-radio-btn--" + variant : "";
  const refInput = useRef<HTMLInputElement>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter") {
      if(refInput !== null) {
        refInput.current?.setAttribute("checked","");
        refInput.current?.click();
        setTimeout(() => {
          togglePopup();
        }, 100);
      }
      
    }
  };

  const handleClick = () => {
    setTimeout(() => {
      togglePopup();
    }, 100);
  };

  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        className={`a-radio-btn ${className}`}
        value={value}
        onChange={(e) => {
          handleChange(e, content);
        }}
        defaultChecked={id === value}
        ref={refInput}
      />
      <label
        htmlFor={id}
        onClick={handleClick}
        onKeyUp={(e) => {
          handleKeyUp(e);
        }}
        tabIndex={statePopup ? 0 : 0}
      >
        {content}
      </label>
    </>
  );
}

export default RadioButton;
