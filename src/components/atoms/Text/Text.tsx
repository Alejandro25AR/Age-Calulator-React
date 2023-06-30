interface Props {
  children: React.ReactNode;
  className?: string;
} 

function Text({children,className=""}:Props) {
  return (
    <p className={"a-text "+className}>
      {children}
    </p>
  );
}

export default Text;