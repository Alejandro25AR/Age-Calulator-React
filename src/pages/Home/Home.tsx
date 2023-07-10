import { DefaultLayout, ContainerCalculateAge, ChangeTheme } from "@/components/templates";
import CalculateAge from "@/components/templates/CalculateAge/CalculateAge";

function Home() {
  return (
    <DefaultLayout>
      <ChangeTheme/>
      <ContainerCalculateAge>
        <CalculateAge/>
      </ContainerCalculateAge>
    </DefaultLayout>
  );
}

export default Home;