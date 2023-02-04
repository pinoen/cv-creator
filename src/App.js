import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Tasks from "./components/Tasks";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
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
