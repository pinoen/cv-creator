import Header from "./components/pages/Header";
import Summary from "./components/pages/Summary";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Tasks from "./components/pages/Tasks";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Courses from "./components/pages/Courses";
import EducationContextProvider from "./components/context/EducationContext";
import ExperienceContextProvider from "./components/context/ExperienceContext";
import TaskContextProvider from "./components/context/TaskContext";
import SkillContextProvider from "./components/context/SkillContext";
import ProjectsContextProvider from "./components/context/ProjectsContext";
import CoursesContextProvider from "./components/context/CoursesContext";
import HeaderContextProvider from "./components/context/HeaderContext";
import SummaryContextProvider from "./components/context/SummaryContext";
import Swal from 'sweetalert2'
import LanguageContextProvider from "./components/context/LanguageContext";


window.addEventListener('load', () => {
  Swal.fire(
    'Instructions',
    'Hover over the section you want to complete and click the pencil. In the Header Section you can switch your CV language to Spanish. After complete a form click the SAVE button. When you have completed all sections, press CTL + P to print out your CV as a pdf document.',
    'info'
  )
})

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>

        <HeaderContextProvider>
          <Header />
        </HeaderContextProvider>

        <SummaryContextProvider>
          <Summary />
        </SummaryContextProvider>

        <EducationContextProvider>
          <Education />
        </EducationContextProvider>

        <ExperienceContextProvider>
          <Experience />
        </ExperienceContextProvider>

        <TaskContextProvider>
          <Tasks />
        </TaskContextProvider>

        <SkillContextProvider>
          <Skills />
        </SkillContextProvider>

        <ProjectsContextProvider>
          <Projects />
        </ProjectsContextProvider>

        <CoursesContextProvider>
          <Courses />
        </CoursesContextProvider>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
