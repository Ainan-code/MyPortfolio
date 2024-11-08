import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram,  } from "react-icons/fa";

interface SocialLink {
  icon: JSX.Element;
  link: string;
}

const social_links_icons: SocialLink[] = [
  {
    icon: <FiGithub />,
    link: "https://github.com/Ainan-code/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ainanhassan/",
  },
 
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/ainan-hassan",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col gap-8 pt-20 xmd:pt-48">
      <ul className="flex items-center justify-center gap-9 xmd:hidden">
        {social_links_icons.map((social) => (
          <li className="social-links animate-social-links" key={social.link}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>

      <div className="fade-in-animation flex flex-col items-center justify-center gap-2 pb-10 font-mono text-[12px]">
        <a
          href="https://github.com/Ainan-code/MyPortfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out hover:text-secondaryColor"
        >
          {t("footer.developedBy")}
        </a>
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition duration-300 ease-in-out hover:text-secondaryColor"
        >
          {t("footer.designedBy")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
