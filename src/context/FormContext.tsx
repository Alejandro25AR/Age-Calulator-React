import { IDate, IErrorMessage, dateEmpty } from "@/models";
import { ChangeEvent, createContext, useState } from "react";
import { useValidateForm } from "@/hooks";

interface Props {
  children: React.ReactNode;
}

interface ContextReturn {
  form: IDate,
  handleChange: (event:ChangeEvent<HTMLInputElement>,value?:string) => void;
  errorMessage: IErrorMessage;
}

export const FormContext = createContext<ContextReturn>({} as ContextReturn);

export function FormContextProvider({children}:Props) {
  const [form,setForm] = useState({...dateEmpty});
  const errorMessage = useValidateForm(form);

  const handleChange = (event:ChangeEvent<HTMLInputElement>,value?:string) => {
    if(value !== undefined) {
      setForm({
        ...form,
        [event.target.name]: value
      });
    }
    else {
      setForm(()=>({
        ...form,
        [event.target.name]: event.target.value
      }));
    }
  }

  const values:ContextReturn = {
    form,
    handleChange,
    errorMessage
  }

  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  );
}