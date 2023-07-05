import { useMemo } from "react";
// Models
import { IErrorMessage, IFocusedFields } from "@/models";

function useGetNumberOfValid(errorMessage: IErrorMessage, focusedFields:IFocusedFields) {
  const numberValidFields = useMemo(()=> {
    const valuesFocusedFields = Array.from(Object.values(focusedFields));
    const numberFocusedFields= valuesFocusedFields.filter(value => !value).length;
    const valuesErrorMessage = Array.from(Object.values(errorMessage));
    const numberValidFields = valuesErrorMessage.filter(value => value === '').length;
    return numberValidFields - numberFocusedFields;
  },[errorMessage]);

  return numberValidFields;
}

export { useGetNumberOfValid };