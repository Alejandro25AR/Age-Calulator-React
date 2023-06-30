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

  const handleKeyUp = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter") {
      const $input = e.currentTarget.parentElement?.children[0];
      $input?.setAttribute("checked", "");
      $input?.click();
      setTimeout(() => {
        togglePopup();
      }, 100);
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
