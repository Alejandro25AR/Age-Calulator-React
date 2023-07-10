/* Components */
import { RadioButton } from "@/components/atoms";

interface Props {
  items: Array<number | string>;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>,value?:string) => void;
  statePopup: boolean;
  togglePopup: () => void;
  variant?: "3-column" | "7-column";
  variantItem?: "small";
}

function RadioButtonList({items,name,value,handleChange,statePopup,variant,variantItem,togglePopup}:Props) {

  const className = variant ? "m-radio-btn-list--"+variant : "m-radio-btn-list";

  return (
    <ol className={className}>
      { 
        items.map((item)=>(
          <li key={item}>
            <RadioButton
              id={item+''}
              name={name}
              value={value}
              content={item+''}
              handleChange={handleChange}
              variant={variantItem}
              statePopup={statePopup}
              togglePopup={togglePopup}
            />
          </li>
        ))
      }
    </ol>
  );
}

export default RadioButtonList;