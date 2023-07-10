import { useState } from "react";
/* Models */
import { IDate, dateEmpty } from "@/models";
/* Context */
import { FormContextProvider } from "@/context";
/* Components */
import { EstimatedAgeMemo, Form } from "..";

function CalculateAge() {
  const [currentAge,setCurrentAge] = useState({...dateEmpty});

  const changeCurrentAge = (age:IDate) => {
    const isIqualResult = 
      age.year  === currentAge.year &&
      age.month === currentAge.month && 
      age.day   === currentAge.day;
    if(!isIqualResult){
      setCurrentAge(age);
    }
  };

  return (
    <>
      <FormContextProvider>
        <Form changeCurrentAge={changeCurrentAge} />
      </FormContextProvider>
      <EstimatedAgeMemo {...currentAge}/>
    </>
  );
}

export default CalculateAge;