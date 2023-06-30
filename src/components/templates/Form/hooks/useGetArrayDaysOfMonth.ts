import { helpGetDaysOfTheMonth, helpGetNumberMonth } from "@/helper";
import { useMemo } from "react";

function useGetArrayDaysOfMonth (year:string,month:string) {
  const daysOfMonth = useMemo(()=> {
    const numberMonth = helpGetNumberMonth(month);
    const daysOfMonth = helpGetDaysOfTheMonth(numberMonth,Number(year));
    const arrDaysOfMonth = Array.from({length:daysOfMonth},(_,i) => i+1);
    return arrDaysOfMonth;
  },[year,month]);

  return daysOfMonth;
}

export { useGetArrayDaysOfMonth };