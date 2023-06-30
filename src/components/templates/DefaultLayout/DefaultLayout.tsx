type Props = {
  children: React.ReactNode;
}

function DefaultLayout({children}:Props) {
  return (
    <div className="t-default-layout">
      {children}
    </div>
  );
}

export default DefaultLayout;