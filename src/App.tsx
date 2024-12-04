import "./App.css";
import { Header } from "./layout/header/Header";
import { About } from "./layout/header/sections/about/About";
import { Main } from "./layout/header/sections/main/Main";
import { Projects } from "./layout/header/sections/Projects/Projects";
import { Skills } from "./layout/header/sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
