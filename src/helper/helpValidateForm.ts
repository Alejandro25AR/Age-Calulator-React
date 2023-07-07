// Models
import { IDate, IFocusedFields, errorMessageEmpty } from "@/models";
// Helpers
import { helpGetDaysOfTheMonth, helpGetNumberMonth } from ".";

const regExpNumbers =  /^[0-9]+$/;

function helpValidateForm(form:IDate,focusedFields: IFocusedFields) {
  const { year,month,day } = form;
  const errorMessage = {...errorMessageEmpty};
  const currentDate = new Date();

  /* Validate field day */
  const numberMonth = helpGetNumberMonth(month);
  const daysOfMonth = helpGetDaysOfTheMonth(numberMonth,Number(year));
  const dayExist = Number(day) <= daysOfMonth && Number(day) > 0;

  if(focusedFields.day) {
    if(day === "") {
      errorMessage.day = 'This field can not be blank';
    } 
    else if(isNaN(Number(day))) {
      errorMessage.day = 'This field only takes digits';
    } 
    else if(!dayExist) {
      errorMessage.day = 'The typed day is not valid';
    }
  }
  

  /* Validate field month */
  if(focusedFields.month) {
    if(month === "") {
      errorMessage.month = 'This field can not be blank';
    } 
    else if(regExpNumbers.test(month)) {
      errorMessage.month = 'This can not have nums';
    } 
    else if(helpGetNumberMonth(month)===-1) {
      errorMessage.month = 'The month is not valid';
    }
  }

  /* Validate field year */
  if(focusedFields.year) {
    if(year === "") {
      errorMessage.year = 'This field can not be blank';
    } 
    else if(isNaN(Number(year))) {
      errorMessage.year = 'This field only takes digits';
    } 
    else if(Number(year) > currentDate.getFullYear() ) {
      errorMessage.year =`Must be less than ${currentDate.getFullYear() + 1}`;
    } 
    else if(Number(year) < 0 ) {
      errorMessage.year ='The year can not be negative';
    }
  }

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

export { helpValidateForm };