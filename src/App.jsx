import "./App.css";
import FiltersBox from "./components/Filters/FiltersBox";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <FiltersBox />
      </Main>
    </>
  );
}

export default App;
