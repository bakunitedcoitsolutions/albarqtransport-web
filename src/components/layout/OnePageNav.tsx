import Link from "next/link";
import { Link as ScrollLink } from "react-scroll"; // Optional for enhanced smooth scrolling

interface OnePageNavProps {
  home2?: boolean;
}

export default function OnePageNav({ home2 }: OnePageNavProps): React.ReactElement {
  return (
    <>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fa-regular fa-plus" />
            </Link>
            {/* Submenu implementation */}
          </li>
          <li>
            {/* ScrollLink is used to achieve smooth scroll to sections */}
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70} // Optional: Adjust offset if needed
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="team" smooth={true} duration={500}>
              Team
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="blog" smooth={true} duration={500}>
              Blog
            </ScrollLink>
          </li>
          {!home2 && (
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
