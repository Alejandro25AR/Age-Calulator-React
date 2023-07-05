import { useEffect, useState } from "react";
// Models
import { IDate,IFocusedFields,errorMessageEmpty } from "@/models";
// Helpers
import { helpValidateForm } from "@/helper";

function useValidateForm(form:IDate,focusedFields:IFocusedFields) {
  const [errorMessages,setErrorMessages] = useState({...errorMessageEmpty});
  useEffect(() => {
    const errorNewMessages = helpValidateForm(form,focusedFields);
    setErrorMessages({...errorMessages,...errorNewMessages});
  },[form])

  return errorMessages;
}

export { useValidateForm };