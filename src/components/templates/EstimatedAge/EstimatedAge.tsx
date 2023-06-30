import { TextPairs } from "@/components/molecules";
import { AgeContext } from "@/context/AgeContext";
import { useContext } from "react";

function EstimatedAge() {
  const { currentAge } = useContext(AgeContext);
  
  return (
    <div className="t-estimated-age">
    { currentAge &&
      <> 
        <TextPairs namePeriod="year"  value={currentAge.year}/>
        <TextPairs namePeriod="month" value={currentAge.month}/>
        <TextPairs namePeriod="day"   value={currentAge.day}/>
      </>
    }
    </div>
  );
}

export default EstimatedAge;