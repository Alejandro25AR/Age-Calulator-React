interface Props {
  children: React.ReactNode
}

function ContainerCalculateAge({children}:Props) {
  return (
    <div className="t-container-calculate-age">
      {children}
    </div>
  );
}

export default ContainerCalculateAge;