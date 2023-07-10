/* Custom Hooks */
import { useChangeTheme } from "@/hooks";
/* Components */
import { Button } from "@/components/atoms";

function ChangeTheme() {
  const [dark,handleChangeTheme] = useChangeTheme();

  return (
    <div className="t-change-theme">
      <Button 
        icon={dark ? "Moon" : "Sun"}
        handleClick={handleChangeTheme}
        variant="icon"
        title="change theme"
      />
    </div>
  );
}

export default ChangeTheme;