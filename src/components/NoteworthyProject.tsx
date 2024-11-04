import { useInView } from "react-intersection-observer";

// icons
import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";
import { useTranslation } from "react-i18next";

interface NoteworthyProjectProps {
  data: {
    title: string;
    repoLink: string;
    previewLink?: string;
    technologies: string[];
    description: string;
  };
}

const NoteworthyProject = ({ data }: NoteworthyProjectProps) => {
  // library hooks
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  // data
  const { title, repoLink, previewLink, technologies, description } = data;

  return (
    <a
      target="_blank"
      href={previewLink ? previewLink : repoLink}
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } group cursor-pointer rounded bg-lightPrimaryColor p-8 transition duration-200 ease-in-out hover:-translate-y-1.5`}
    >
      <header className="flex items-center justify-between pb-[35px]">
        <AiOutlineFolder className="text-[45px] text-secondaryColor" />
        <ul className="flex gap-3">
          <li>
            <a href={repoLink} target="_blank">
              <FiGithub className="noteworthy-project-links text-[20px]" />
            </a>
          </li>
          {previewLink && (
            <li>
              <a href={previewLink} target="_blank">
                <PiArrowSquareOut className="noteworthy-project-links" />
              </a>
            </li>
          )}
        </ul>
      </header>

      <h3 className="pb-2.5 text-[22px] font-semibold text-lightestTertiaryColor hover:text-secondaryColor group-hover:text-secondaryColor">
        {title}
      </h3>

      <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
        {t(description)}
      </p>

      <ul className="flex w-full flex-wrap gap-3 pt-5 font-mono text-[12px]">
        {technologies &&
          technologies.map((technology) => (
            <li key={technology}> {technology}</li>
          ))}
      </ul>
    </a>
  );
};

export default NoteworthyProject;
