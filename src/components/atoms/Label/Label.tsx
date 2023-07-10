import { memo } from "react";

interface Props {
  content: string;
  htmlFor: string;
}

function Label({content,htmlFor}:Props) {
  return (
    <label 
      className="a-label"
      htmlFor={htmlFor}  
    >
      {content}
    </label>
  );
}

const LabelMemo = memo((props:Props) => <Label {...props}/>)

export { Label,LabelMemo };