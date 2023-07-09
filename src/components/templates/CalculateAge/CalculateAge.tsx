import { FormContextProvider } from "@/context";
import { IDate, dateEmpty } from "@/models";
import { useCallback, useEffect, useState } from "react";
import EstimatedAgeMemo from "../EstimatedAge/EstimatedAge";
import { Form } from "..";

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