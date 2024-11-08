import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { RiFolderInfoLine } from "react-icons/ri";
import Project from "../components/Project";
import { ProjectData } from "../types";


const projects_list: ProjectData[] = [
  {
    isReverse: false,
    image:
      "https://res.cloudinary.com/dicakrx1f/image/upload/v1730753926/portfolio/vibe-circle.png",
    title: "VibeCircle",
    repoLink: "https://github.com/Ainan-code/VibeCircle",
    previewLink: "https://vibecircle.onrender.com/",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    description: {
      text: "projects.VibeCircle.description",
      highlight: "projects.VibeCircle.highlight",
    },
  },
  {
    isReverse: true,
    image:
      "https://res.cloudinary.com/dicakrx1f/image/upload/v1730819247/portfolio/waw3emm07p9nb0vm3nd2.png",
    title: "Ping-Me",
    repoLink: "https://github.com/Ainan-code/Messaging-App",
    previewLink: "https://ping-me-3urz.onrender.com",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Zustand"
    ],
    description: {
      text: "projects.messagingApp.description",
      highlight: "projects.messagingApp.highlight",
    },
  },
  {
    isReverse: false,
    image:
      "https://res.cloudinary.com/dicakrx1f/image/upload/v1731066316/portfolio/hshmz4jmq6phu0dcxui8.png",
    title: "Travel-Tales",
    repoLink: "https://github.com/Ainan-code/Travel-Tales-Front-end",
    previewLink: "https://travel-tales-3c8.netlify.app/",
    technologies: ["React", "ExpressJs", "NodeJS", "MONGODB"],
    description: {
      text: "projects.traveltales.description",
      highlight: "projects.traveltales.highlight",
    },
  },
  
 
];

const Projects = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="pt-[60px] xsm:pt-[80px] xmd:pt-[100px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        <div className="flex items-center gap-5 pb-4">
          <h2>
            <span className="numberOfHeading">03. </span>{" "}
            <span className="fade-in-animation numbered-headings">
              {t("projects.title")}
            </span>
          </h2>
          <div className="numbered-headings-bar" />
        </div>

        <div className="fade-in-animation flex flex-col items-center gap-2 pb-10 xsm:flex-row">
          <div>
            <RiFolderInfoLine className="text-[50px] text-secondaryColor" />
          </div>

          <p className="rounded-md bg-lightPrimaryColor p-4 text-[18.5px] font-medium text-lightestTertiaryColor">
            {t("projects.info.part1")}
            <span className="text-secondaryColor">
              {t("projects.info.highlight1")}
            </span>
            {t("projects.info.part2")}
            <a
              href="https://render.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryColor underline"
            >
              Render
            </a>{" "}
            {t("projects.info.part3")}
            <span className="text-secondaryColor">
              {t("projects.info.highlight2")}
            </span>{" "}
            {t("projects.info.part4")}
            <span className="text-secondaryColor">
              {t("projects.info.highlight3")}
            </span>
          </p>
        </div>
      </header>

      <section>
        {projects_list.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
