import { useContext } from "react";
// Context
import { AgeContext } from "@/context";
// Models
import { IDate } from "@/models";
// Helpers
import { helpGetDaysMonthsAndYearsOfPerson } from "../helper";


function useSubmit(form: IDate) {
  const { changeCurrentAge } = useContext(AgeContext);
  const { day, month, year } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = helpGetDaysMonthsAndYearsOfPerson(Number(day), month, Number(year));
    changeCurrentAge(result);
  };

  return handleSubmit;
}

export { useSubmit }