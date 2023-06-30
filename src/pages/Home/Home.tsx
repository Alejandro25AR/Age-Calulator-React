import { DefaultLayout, Form, EstimatedAge, ContainerCalculateAge } from "@/components/templates";
import { AgeProvider, FormContextProvider } from "@/context";



function Home() {
  return (
    <DefaultLayout>
      <FormContextProvider>
        <AgeProvider>
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