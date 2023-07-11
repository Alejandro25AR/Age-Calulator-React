/* Components */
import { Span, Text } from "@/components/atoms";

interface Props {
  value: number | string;
  namePeriod: "month" | "year" | "day";
}

function TextPairs({ value, namePeriod }: Props) {
  return (
    <Text className="m-text-pairs">
      <Span 
        content={value ? value : "--"} 
        variant="giant-purple" />
      <Span
        content={Number(value) === 1 ? namePeriod : namePeriod + "s"}
        variant="giant-italic"
      />
    </Text>
  );
}

export default TextPairs;
