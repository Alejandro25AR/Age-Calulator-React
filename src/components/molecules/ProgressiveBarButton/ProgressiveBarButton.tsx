import { Icon } from "@/components/atoms";
import { useMemo } from "react";

interface Props {
  icon?: "Arrow";
  handleClick: () => void;
  fiedlNumber: number;
  fieldsValidate: number;
}

function ProgressiveBarButton({
  icon,
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
      : 100 - fieldsValidate * dividedPercent;

  return (
    <button
      className="m-progressive-bar-btn"
      onClick={handleClick}
      disabled={fiedlNumber - fieldsValidate !== 0}
    >
      <div
        className="m-progressive-bar-btn__bar"
        style={{
          transform: `translateY(${percerntProgressBar}%)`,
        }}
      ></div>
      {<Icon icon={icon} />}
    </button>
  );
}

export default ProgressiveBarButton;
