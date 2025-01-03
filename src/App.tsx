import React from "react";
import { ThemeProvider } from "styled-components";
import { Particle } from "./components/particle/Particle";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Contacts } from "./layout/sections/contacts/Contacts";
import Experience from "./layout/sections/experience/Experience";
import { Main } from "./layout/sections/main/Main";
import { Projects } from "./layout/sections/Projects/Projects";
import { Skills } from "./layout/sections/Skills/Skills";
import { darkTheme, lightTheme } from "./styles/Theme.styled";
import DarkModeToggle from "./components/darkModeToggle/DarkModeToggle";
import { Wrapper } from "./components/Wrapper";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [theme, setTheme] = React.useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: isDarkTheme
          ? darkTheme.colors.colorBg
          : lightTheme.colors.colorBg,
        color: isDarkTheme ? darkTheme.colors.font : lightTheme.colors.font,
      }}
    >
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Wrapper>
          <Particle isDarkTheme={isDarkTheme} />

          <Header toggleTheme={toggleTheme} />
          <Main isDarkTheme={isDarkTheme} />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contacts />
          <Footer />

          {width > breakpoint && <DarkModeToggle toggleTheme={toggleTheme} />}
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
