import { TextPairs } from "@/components/molecules";

interface Props {
  year:string;
  month:string;
  day:string;
}

function EstimatedAge({ year,day,month }: Props) {
  return (
    <div className="t-estimated-age">
      {
        <>
          <TextPairs namePeriod="year" value={year} />
          <TextPairs namePeriod="month" value={month} />
          <TextPairs namePeriod="day" value={day} />
        </>
      }
    </div>
  );
}

export default EstimatedAge;