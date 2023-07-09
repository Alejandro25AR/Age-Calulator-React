import { DefaultLayout, Form, EstimatedAge, ContainerCalculateAge, ChangeTheme } from "@/components/templates";
import { AgeProvider, FormContextProvider } from "@/context";



function Home() {
  return (
    <DefaultLayout>
      <ChangeTheme/>
      <ContainerCalculateAge>
        <AgeProvider>
          <FormContextProvider>
            <Form/>
          </FormContextProvider>
          <EstimatedAge/>
        </AgeProvider>
      </ContainerCalculateAge>
    </DefaultLayout>
  );
}

export default Home;