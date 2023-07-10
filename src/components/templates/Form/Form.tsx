import { useContext } from "react";
// Models
import { IDate } from "@/models";
// Context
import { FormContext } from "@/context";
// Constants
import { MONTHS } from "@/constants";
// Custom Hooks
import { useSubmit,useGetArrayDaysOfMonth,useGetNumberOfValid } from "@/hooks";
// Components
import { ProgressiveBarButtonMemo } from "@/components/molecules";
import { Field } from "@/components/organisms";

interface Props {
  changeCurrentAge: (age: IDate) => void;
}

function Form({changeCurrentAge}:Props) {
  const { form,errorMessage,handleChange,changeFocusedFields,focusedFields } = useContext(FormContext);
  const daysOfMonth = useGetArrayDaysOfMonth(form.year, form.month);
  const fieldsValidate = useGetNumberOfValid(errorMessage,focusedFields);
  const handleSubmit = useSubmit(form,changeCurrentAge);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="t-form"
    >
      <div className="t-form__fields">
      <Field
          id="day"
          name="day"
          contentLabel="day"
          placeholder="12"
          variant="InputGroupBtn"
          dataList={daysOfMonth}
          variantList="7-column"
          variantItemList="small"
          value={form.day}
          handleChange={handleChange}
          maxLength={2}
          inputMode="numeric"
          errorMessage={errorMessage.day}
          handleFocus={changeFocusedFields}
        />
        <Field
          id="month"
          contentLabel="month"
          name="month"
          placeholder="Mar"
          variant="InputGroupBtn"
          dataList={MONTHS}
          variantList="3-column"
          value={form.month}
          handleChange={handleChange}
          maxLength={3}
          errorMessage={errorMessage.month}
          handleFocus={changeFocusedFields}
        />
        <Field
          id="year"
          contentLabel="year"
          name="year"
          placeholder="1983"
          value={form.year}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e)
          }
          maxLength={4}
          inputMode="numeric"
          errorMessage={errorMessage.year}
          handleFocus={changeFocusedFields}
        />
      </div>
      <ProgressiveBarButtonMemo
        icon="Arrow"
        handleClick={() => {}}
        fieldsValidate={fieldsValidate}
        fiedlNumber={3}
        title="calculate age"
      />
    </form>
  );
}

export default Form;