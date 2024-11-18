import { useEffect } from "react";
import { useTranslation } from "react-i18next";


// components
import Overlay from "./Overlay";

interface NavItem {
  number: string;
  title: string;
  sectionRef: Element | null;
}

interface NavMobileMenuProps {
  mobileMenuMount: string;
  hide: () => void;
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
  sectionReferences: Record<string, Element | null>;
  scrollToSection: (sectionRef: Element | null) => void;
}

const ResumeButton = () => {
  const { t, i18n } = useTranslation();

  const cvUrl =
    i18n.language === "en"
      ? "https://res.cloudinary.com/dicakrx1f/image/upload/f_auto,q_auto/v1/portfolio/olfvdbmxx0yovtb6qhgx"
      : "https://res.cloudinary.com/dicakrx1f/image/upload/f_auto,q_auto/v1/portfolio/olfvdbmxx0yovtb6qhgx";

  return (
    <li className="group relative h-[46px] w-[180px]">
      <a href={cvUrl} target="_blank" rel="noopener noreferrer">
        <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-lightPrimaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
          {t("navbar.cv")}
        </button>
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
      </a>
    </li>
  );
};

const NavMobileMenu = ({
  mobileMenuMount,
  hide,
  isMenuActive,
  setIsMenuActive,
  sectionReferences,
  scrollToSection,
}: NavMobileMenuProps) => {
  const { t } = useTranslation();

  const mobile_nav_items: NavItem[] = [
    {
      number: "01.",
      title: t("navbar.about"),
      sectionRef: sectionReferences.aboutMeRef,
    },
    {
      number: "02.",
      title: t("navbar.skills"),
      sectionRef: sectionReferences.skillsRef,
    },
    {
      number: "03.",
      title: t("navbar.projects"),
      sectionRef: sectionReferences.projectsRef,
    },
    {
      number: "04.",
      title: t("navbar.contact"),
      sectionRef: sectionReferences.contactRef,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const scrollToSectionFromMobileNav = (sectionRef: Element | null) => {
    scrollToSection(sectionRef);
    hideNavAndTriggerMenuAnimation();
  };

  const hideNavAndTriggerMenuAnimation = () => {
    hide();
    setIsMenuActive(!isMenuActive);
  };

 

  return (
    <>
      <Overlay
        hideNavAndTriggerMenuAnimation={hideNavAndTriggerMenuAnimation}
      />
      <section
        className={`mobileMenu-slidein-animation ${
          mobileMenuMount === "unmounting"
            ? "mobileMenu-slideout-animation"
            : ""
        } fixed right-0 top-0 z-30 flex min-h-screen w-[70%] max-w-[400px] items-center justify-center bg-lightPrimaryColor font-mono text-tertiaryColor xmd:hidden`}
      >
        <ul className="fade-in-animation flex flex-col items-center gap-8 p-2.5">
          {mobile_nav_items.map((item) => (
            <li
              key={item.number}
              className="nav-links flex flex-col items-center justify-center gap-2"
              onClick={() => scrollToSectionFromMobileNav(item.sectionRef)}
            >
              <span className="text-[14px] text-secondaryColor">
                {item.number}
              </span>
              <span className="[font-size:_clamp(14px,4vw,18px)]">
                {item.title}
              </span>
            </li>
          ))}
          <ResumeButton />
       
        </ul>
      </section>
    </>
  );
};

export default NavMobileMenu;
