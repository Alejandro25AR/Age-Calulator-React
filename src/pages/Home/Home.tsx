import { DefaultLayout, ContainerCalculateAge, ChangeTheme, CalculateAge } from "@/components/templates";

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