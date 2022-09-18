import FormInputs from './components/FormInputs';
import FormList from './components/FormList';
import FormProvider from './context/FormProvider';
import './App.css';

function App() {
  return (
    <FormProvider>
      <main>
        <FormInputs />
        <FormList />      
      </main>
    </FormProvider>
  );
}

export default App;
