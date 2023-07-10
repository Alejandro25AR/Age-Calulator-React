import { FocusEvent, RefObject, useRef, ReactNode } from "react";
/* Custom Hooks */
import { useOnClickOutside } from "@/hooks";

interface Props {
  children: ReactNode;
  statePopup: boolean;
  refButton?: RefObject<HTMLElement> 
  hidePopup: () => void;
}

function Popup({ children, statePopup, refButton, hidePopup }: Props) {

  const refPopup = useRef<HTMLDivElement>(null);
  
  const handleFocus = (e: FocusEvent<HTMLDivElement, Element>) => {
    if(e.target.tagName === 'SPAN') {
      hidePopup();
    }
  };

  const handleClick = () => {
    setTimeout(()=>{
      hidePopup();
    },100)
  }

  if(refButton !== undefined){
    useOnClickOutside(refPopup,handleClick,refButton);
  } else {
    useOnClickOutside(refPopup,handleClick);
  }

  return (
    <div
      ref={refPopup}
      className={`a-popup ${statePopup ? "u-flex" : ""}`}
      onFocus={(e) => handleFocus(e)}
    >
      {children}
      <span tabIndex={0} style={{position:"absolute",width:'0',height:'0'}}></span>
    </div>
  );
}

export default Popup;
