import { useMemo } from "react";
// Models
import { IDate,IFocusedFields,errorMessageEmpty } from "@/models";
// Helpers
import { helpValidateForm } from "@/helper";

function useValidateForm(form:IDate,focusedFields:IFocusedFields) {
  const errorMessages = useMemo(() => {
    const errorMessages = {...errorMessageEmpty};
    const errorNewMessages = helpValidateForm(form,focusedFields);
    return {...errorMessages,...errorNewMessages};
  },[form,focusedFields])

  return errorMessages;
}

export { useValidateForm };