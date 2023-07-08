import { DefaultLayout, Form, EstimatedAge, ContainerCalculateAge, ChangeTheme } from "@/components/templates";
import { AgeProvider, FormContextProvider } from "@/context";



function Home() {
  return (
    <DefaultLayout>
      <FormContextProvider>
        <AgeProvider>
          <ChangeTheme/>
          <ContainerCalculateAge>
            <Form/>
            <EstimatedAge/>
          </ContainerCalculateAge>
        </AgeProvider>
      </FormContextProvider>
    </DefaultLayout>
  );
}

export default Home;