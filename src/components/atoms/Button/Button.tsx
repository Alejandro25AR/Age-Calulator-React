import { RefObject } from "react";
import { Icon } from "..";

interface Props {
  content?: string;
  variant?: "icon";
  icon?: "Arrow" | "Moon" | "Sun";
  refButton?: RefObject<HTMLButtonElement>;
  handleClick: () => void;
  title?: string;
}

function Button({ variant, content, icon, refButton, title, handleClick }: Props) {
  const className = variant ? "a-btn--" + variant : "a-btn";

  const handleOnClick = (e:React.MouseEvent<HTMLElement,MouseEvent>) => {
    e.preventDefault();
    handleClick();
  }

  const handleOnTouchEnd = (e:React.TouchEvent<HTMLElement>) => {
    e.preventDefault();
    handleClick();
  }

  return (
    <button
      ref={refButton}
      className={className}
      onClick={(e)=>handleOnClick(e)}
      onTouchEnd={(e)=>handleOnTouchEnd(e)}
      title={title}
    >
      {content || <Icon icon={icon} />}
    </button>
  );
}

export default Button;
