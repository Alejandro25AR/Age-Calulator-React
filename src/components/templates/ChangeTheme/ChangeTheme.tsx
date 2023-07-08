import { Button } from "@/components/atoms";
import { useChangeTheme } from "@/hooks";

function ChangeTheme() {
  const [dark,handleChangeTheme] = useChangeTheme();

  return (
    <div className="t-change-theme">
      <Button 
        icon={dark ? "Moon" : "Sun"}
        handleClick={handleChangeTheme}
        variant="icon"
      />
    </div>
  );
}

export default ChangeTheme;