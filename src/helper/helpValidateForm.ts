// Models
import { IDate, IFocusedFields, errorMessageEmpty } from "@/models";
// Helpers
import { helpGetDaysOfTheMonth, helpGetNumberMonth } from ".";

const regExpNumbers =  /^[0-9]+$/;

function helpValidateForm(form:IDate,focusedFields: IFocusedFields) {
  const { year,month,day } = form;
  const errorMessage = {...errorMessageEmpty};
  const currentDate = new Date();

  errorMessage.day   = getErrorMessageFromDayField(day,month,year,focusedFields.day);
  errorMessage.month = getErrorMessageFromMonthField(month,focusedFields.month);
  errorMessage.year  = getErrorMessageFromYearField(year,focusedFields.year,currentDate);

  /* Special validation */
  if(Number(year) === currentDate.getFullYear()){
    if(helpGetNumberMonth(month) > currentDate.getMonth()+1) {
      errorMessage.month ='Can not beats actual month';
    }
    else if(helpGetNumberMonth(month) === currentDate.getMonth()+1 && Number(day) > currentDate.getDate()) {
      errorMessage.day ='Can not beats current day';
    }
  }

  return errorMessage;
}

/**
 * This function returns an error message if the text field "Day" does not meet the requirements.
 * @param day - value of field text day
 * @param month - value of field text month
 * @param year - value of field text year
 * @param isFocusedDay - value to know if the field has already been focused.
 * @returns a message error or "" if no error
 */
function getErrorMessageFromDayField(day:string,month:string,year:string,isFocusedDay:boolean) {
  const numberMonth = helpGetNumberMonth(month);
  const daysOfMonth = helpGetDaysOfTheMonth(numberMonth,Number(year));
  const dayExist = Number(day) <= daysOfMonth && Number(day) > 0;

  if(isFocusedDay) {
    if(day === "") {
      return 'This field can not be blank';
    } 
    else if(isNaN(Number(day))) {
      return 'This field only takes digits';
    } 
    else if(!dayExist) {
      return 'The typed day is not valid';
    }
  }
  return '';
}

/**
 * This function returns an error message if the text field "Month" does not meet the requirements.
 * @param month - value of field text month
 * @param isFocusedDay - value to know if the field has already been focused.
 * @returns a message error or "" if no error
 */
function getErrorMessageFromMonthField(month:string,isFocusedMonth:boolean) {
  if(isFocusedMonth) {
    if(month === "") {
      return 'This field can not be blank';
    } 
    else if(regExpNumbers.test(month)) {
      return 'This can not have nums';
    } 
    else if(helpGetNumberMonth(month)===-1) {
      return 'The month is not valid';
    }
  }
  return "";
}

/**
 * This function returns an error message if the text field "Year" does not meet the requirements.
 * @param month - value of field text month
 * @param isFocusedDay - value to know if the field has already been focused.
 * @param currentDate - current date
 * @returns a message error or "" if no error
 */
function getErrorMessageFromYearField(year:string,isFocusedYear:boolean,currentDate:Date) {
  if(isFocusedYear) {
    if(year === "") {
      return 'This field can not be blank';
    } 
    else if(isNaN(Number(year))) {
      return 'This field only takes digits';
    } 
    else if(Number(year) > currentDate.getFullYear() ) {
      return `Must be less than ${currentDate.getFullYear() + 1}`;
    } 
    else if(Number(year) < 0 ) {
      return 'The year can not be negative';
    }
  }
  return "";
}

export { helpValidateForm };