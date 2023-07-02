// Models
import { IDate, errorMessageEmpty } from "@/models";
// Helpers
import { helpGetDaysOfTheMonth, helpGetNumberMonth } from ".";

const regExpNumbers =  /^[0-9]+$/;

function helpValidateForm(form:IDate) {
  const { year,month,day } = form;
  const errorMessage = {...errorMessageEmpty};

  /* Validate field day */
  const numberMonth = helpGetNumberMonth(month);
  const daysOfMonth = helpGetDaysOfTheMonth(numberMonth,Number(year));
  const dayExist = Number(day) <= daysOfMonth && Number(day) > 0;

  if(day === "") {
    errorMessage.day = 'This field can not be blank';
  } 
  else if(isNaN(Number(day))) {
    errorMessage.day = 'This field only takes digits';
  } 
  else if(!dayExist) {
    errorMessage.day = 'The day digited is not valid';
  }

  /* Validate field month */
  
  if(month === "") {
    errorMessage.month = 'This field can not be blank';
  } 
  else if(regExpNumbers.test(month)) {
    errorMessage.month = 'This field can not have number';
  } 
  else if(helpGetNumberMonth(month)===-1) {
    errorMessage.month = 'The month is not valid';
  }

  /* Validate field year */
  if(year === "") {
    errorMessage.year = 'This field can not be blank';
  } 
  else if(isNaN(Number(year))) {
    errorMessage.year = 'This field only takes digits';
  } 
  else if(Number(year) > 2023 ) {
    errorMessage.year ='The year must be less than 2024';
  } 
  else if(Number(year) < 0 ) {
    errorMessage.year ='The year can not be negative';
  }

  return errorMessage;
}

export { helpValidateForm };