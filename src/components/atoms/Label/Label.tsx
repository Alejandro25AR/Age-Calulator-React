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

export default Label;