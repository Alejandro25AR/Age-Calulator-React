import { IDate,dateEmpty } from "@/models";
import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type ContextReturn = {
  currentAge: IDate,
  changeCurrentAge: (age:IDate) => void;
}

const AgeContext = createContext<ContextReturn>({} as ContextReturn);

function AgeProvider({children}:Props) {
  const [currentAge,setCurrentAge] = useState({...dateEmpty});

  const changeCurrentAge = (age:IDate) => {
    setCurrentAge(age);
  }

  const values = {
    currentAge,
    changeCurrentAge
  }

  return (
    <AgeContext.Provider value={values}>
      {children}
    </AgeContext.Provider>
  );
}

export { AgeContext,AgeProvider }