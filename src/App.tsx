import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/header/sections/Main/Main";
import { Projects } from "./layout/header/sections/Projects/Projects";
import { Skills } from "./layout/header/sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
