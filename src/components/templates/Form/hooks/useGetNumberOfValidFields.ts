import { useMemo } from "react";
// Models
import { IErrorMessage } from "@/models";

function useGetNumberOfValid(errorMessage: IErrorMessage) {
  const numberValidFields = useMemo(()=> {
    const valuesErrorMessage = Array.from(Object.values(errorMessage));
    const numberValidFields = valuesErrorMessage.filter(value => value === '').length;
    return numberValidFields;
  },[errorMessage]);

  return numberValidFields;
}

export { useGetNumberOfValid };