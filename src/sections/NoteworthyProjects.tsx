import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import NoteworthyProject from "../components/NoteworthyProject";

interface NoteworthyProject {
  title: string;
  repoLink: string;
  previewLink?: string;
  technologies: string[];
  description: string;
}

const noteworthy_projects_list: NoteworthyProject[] = [
  {
    title: "Shopping Cart",
    repoLink: "https://github.com/Ainan-code/ShoppingCart",
    previewLink: "https://monumental-gelato-3ac8dd.netlify.app/",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    description: "noteworthyProjects.Shoppingcart.description",
  },

 
 
  {
    title: "Memory Card Game",
    repoLink: "https://github.com/Ainan-code/Memory-Card-Game",
    previewLink: "https://keen-strudel-2a65b7.netlify.app/",
    technologies: ["React,  CSS"],
    description: "noteworthyProjects.memoryCard.description",
  },
 
];

const NoteworthyProjects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="py-[60px] xsm:py-[80px] xmd:py-[100px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        <h2 className="fade-in-animation numbered-headings pb-12 text-center">
          {t("noteworthyProjects.title")}
        </h2>
      </header>

      <section className="noteworthy-projects-grid">
        {noteworthy_projects_list.map((project, index) => (
          <NoteworthyProject key={index} data={project} />
        ))}
      </section>
    </section>
  );
};

export default NoteworthyProjects;
