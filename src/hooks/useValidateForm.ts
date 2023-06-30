import { useEffect, useState } from "react";
// Models
import { IDate,errorMessageEmpty } from "@/models";
// Helpers
import { helpValidateForm } from "@/helper";

function useValidateForm(form:IDate) {
  const [errorMessages,setErrorMessages] = useState({...errorMessageEmpty});
  useEffect(() => {
    const errorNewMessages = helpValidateForm(form);
    setErrorMessages({...errorMessages,...errorNewMessages});
  },[form])

  return errorMessages;
}

export { useValidateForm };