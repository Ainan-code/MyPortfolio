import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import RootLayout from "./components/RootLayout";

// sections
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import NoteworthyProjects from "./sections/NoteworthyProjects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <RootLayout>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <NoteworthyProjects />
        <Contact />
        <Footer />
      </RootLayout>
    </I18nextProvider>
  );
};

export default App;
