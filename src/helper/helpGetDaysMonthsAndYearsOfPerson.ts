/**TSDocs */
// Constants
import { MONTHS_OF_THE_YEAR } from "@/constants";
// Helpers
import { helpGetNumberMonth,helpGetDaysOfTheMonth } from "@/helper";

/**
 * This function calculates the total number of years from the year sent to date.
 * @param yearOfBirth - The target year
 * @returns Total number of years
 */
function getYearsOfPerson(yearOfBirth:number) {
  const date = new Date();
  return date.getFullYear() - yearOfBirth;
}

/**
 * This works by calculating the number of months a person has, the months from 1 - 12.
 * @param monthOfBirth - The month of birth of the person
 * @param birthdayHasPassed - It allows us to know if the birthday has passed or not.
 * @returns
 *  - months: number of months after month birthday,
 *  - accumulatedYear: This number determines if another birthday year has passed.
 */
function getMonthsOfPerson(monthOfBirth:number, birthdayHasPassed:boolean) {
  const currentMonth = new Date().getMonth()+1;
  let differenceOfMonths = currentMonth - monthOfBirth;
  
  if(differenceOfMonths < 0) {
    differenceOfMonths = MONTHS_OF_THE_YEAR + differenceOfMonths;
    return { months:differenceOfMonths, accumulatedYear: -1};
  } 
    
  if(differenceOfMonths === 0 && birthdayHasPassed) {
    return { months:0, accumulatedYear: 0 };
  }

  if(differenceOfMonths === 0 && !birthdayHasPassed) {
    return { months:12, accumulatedYear: -1 };
  }

  return { months:differenceOfMonths, accumulatedYear: 0};
}

/**
 * This works by calculating the number of days a person has
 * @param dayOfBirth - Day of birth of the person
 * @returns 
 *  - days: number of days after day birthday,
 *  - accumulatedMonth: This number determines if another birthday month has passed.
 */
function getDaysOfPerson(dayOfBirth:number) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentDay = date.getDate();
  const previousMonth = date.getMonth()-1;

  let differenceInDays = currentDay - dayOfBirth;
  
  if(differenceInDays > 0) {
    return { days:differenceInDays, accumulatedMonth: 0};
  } 
  if(differenceInDays < 0){
    differenceInDays = helpGetDaysOfTheMonth(previousMonth,currentYear) - dayOfBirth + currentDay;
    return { days:differenceInDays, accumulatedMonth: -1};
  }
  return { days:0, accumulatedMonth: 0};
}

/**
 * This function calculates the number of years, months and days a person is old.
 * @param day - Day of birth of the person
 * @param month - Month of birth of the person
 * @param year - Year of birth of the person
 * @returns
 * - years: number of years
 * - months: number of months
 * - days: number of days
 */
function helpGetDaysMonthsAndYearsOfPerson(day:number,month:string,year:number) {
  const numberMonth = helpGetNumberMonth(month);

  const daysPerson   = getDaysOfPerson(day);
  const birthdayHasPassed = daysPerson.accumulatedMonth=== -1 ? false : true;
  const monthsPerson = getMonthsOfPerson(numberMonth, birthdayHasPassed);
  const yearsPerson  = getYearsOfPerson(year);

  return {
    day:   String(daysPerson.days),
    month: String(monthsPerson.months + daysPerson.accumulatedMonth),
    year:  String(yearsPerson + monthsPerson.accumulatedYear),
  }
}

export { helpGetDaysMonthsAndYearsOfPerson }
