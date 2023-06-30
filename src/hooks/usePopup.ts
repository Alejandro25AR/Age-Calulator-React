import { useState } from "react";

function usePopup():[
  statePopup:boolean,
  hidePopup: ()=>void,
  togglePopup: ()=>void,
] {
  const [popup, setPopup] = useState(false);

  const hidePopup   = () => setPopup(false);
  const togglePopup = () => setPopup(()=>!popup);

  return [popup,hidePopup,togglePopup];
}

export { usePopup }