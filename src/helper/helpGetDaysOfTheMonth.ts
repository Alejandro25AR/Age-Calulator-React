/*TSDocs */

/**
 * This function calculates the number of days of x month in x year.
 * @param targetMonth - The number of month from 1 to 12
 * @param year - The target year 
 * @returns number of days of month in year received
 */

function helpGetDaysOfTheMonth(targetMonth:number,year:number) {
  const date = new Date(year, targetMonth,0);
  const daysOfMonth = date.getDate();
  return daysOfMonth;
}

export { helpGetDaysOfTheMonth };