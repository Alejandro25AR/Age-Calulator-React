import { IDate, IErrorMessage, IFocusedFields, dateEmpty, initialFocusedFields } from "@/models";
import { ChangeEvent,createContext, useState } from "react";
import { useValidateForm } from "@/hooks";

interface Props {
  children: React.ReactNode;
}

interface ContextReturn {
  form: IDate,
  errorMessage: IErrorMessage;
  focusedFields: IFocusedFields;
  handleChange: (event:ChangeEvent<HTMLInputElement>,value?:string) => void;
  changeFocusedFields: (name:string) => void;
}

export const FormContext = createContext<ContextReturn>({} as ContextReturn);

export function FormContextProvider({children}:Props) {
  const [form,setForm] = useState({...dateEmpty});
  const [focusedFields, setFocusedFields] = useState({...initialFocusedFields});
  const errorMessage = useValidateForm(form,focusedFields);

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

  const changeFocusedFields = (name:string) => {
    if(name === "year" || name === "month" || name === "day"){
      if(!focusedFields[name]) {
        setFocusedFields({
          ...focusedFields, 
          [name]: true
        })
      }
    }
  }

  const values:ContextReturn = {
    form,
    errorMessage,
    focusedFields,
    handleChange,
    changeFocusedFields
  }

  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  );
}