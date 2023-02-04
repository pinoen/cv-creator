import Header from "./components/pages/Header";
import Summary from "./components/pages/Summary";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Tasks from "./components/pages/Tasks";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Courses from "./components/pages/Courses";
import EducationContextProvider from "./components/context/EducationContext";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <EducationContextProvider>
        <Education />
      </EducationContextProvider>
      <Experience />
      <Tasks />
      <Skills />
      <Projects />
      <Courses />
    </div>
  );
}

export default App;
