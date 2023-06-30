import { Span } from "@/components/atoms";
import { useMemo } from "react";

interface Props {
  content: string;
  handleClick: () => void;
  fiedlNumber: number;
  fieldsValidate: number;
}

function ProgressiveBarButton({
  content,
  handleClick,
  fieldsValidate = 0,
  fiedlNumber,
}: Props) {
  const dividedPercent = useMemo(() => {
    return 100 / fiedlNumber;
  }, []);

  const percerntProgressBar =
    fieldsValidate - fiedlNumber === 0
      ? 0
      : fieldsValidate * dividedPercent - 100;

  return (
    <button
      className="m-progressive-bar-btn"
      onClick={handleClick}
      disabled={fiedlNumber - fieldsValidate !== 0}
    >
      <div
        className="m-progressive-bar-btn__bar"
        style={{
          transform: `translateX(${percerntProgressBar}%)`,
        }}
      ></div>
      <Span content={content} variant="medium-bold" />
    </button>
  );
}

export default ProgressiveBarButton;
