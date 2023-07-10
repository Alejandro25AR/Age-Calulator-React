import { memo } from "react";

interface Props {
  content: string | number;
  variant?: "purple" | "red" | "small" | "small-red" | "medium" | "medium-bold" | "giant" | "giant-italic" |"giant-purple" |  "";
}

function Span({content,variant=""}:Props) {

  const variantClass = variant ? "a-span--" + variant : "a-span";

  return (
    <span
      className={variantClass}
    >{content}</span>
  );
}

const SpanMemo = memo((props:Props) => <Span {...props} />)

export { Span, SpanMemo};