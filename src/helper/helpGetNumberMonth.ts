/**TSDocs  */
// Constants
import { MONTHS } from "@/constants";

/**
 * This function finds the number of the month by its abbreviation
 * @param month - The abbreviation of month to find the number
 * @returns Number of month form 1 to 12
 */

function helpGetNumberMonth(month: string) {
  const numberMonth = MONTHS.findIndex((nameMonth) => month.toLowerCase() === nameMonth.toLowerCase())
  return numberMonth < 0 ? -1 : numberMonth+1;
}

export { helpGetNumberMonth };