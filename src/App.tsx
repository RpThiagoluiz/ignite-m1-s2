import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
//Styles
import { GlobalStyle } from "./styles/Global";

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};

export default App;
