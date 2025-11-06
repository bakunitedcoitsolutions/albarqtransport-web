import Link from "next/link";

export default function Menu() {
  return (
    <>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fa-regular fa-plus" />
            </Link>
            <ul className="submenu has-homemenu">
              <li>
                <div className="homemenu-items">
                  <div className="homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="/index-one" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="/assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-2" className="theme-btn">
                          Multi Page
                        </Link>
                        <Link href="/index-two" className="theme-btn">
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="/team" className="border-none">
              Home
              <i className="fa-regular fa-plus" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="/index-2">Home 02</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li className="has-dropdown">
            <Link href="/news">
              Pages
              <i className="fa-regular fa-plus" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/team">Our Team</Link>
              </li>
              <li>
                <Link href="/team-details">Team Details</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/faq">Faq's</Link>
              </li>
              <li>
                <Link href="/404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/service-details">
              Services
              <i className="fa-regular fa-plus" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/service">Services</Link>
              </li>
              <li>
                <Link href="/service-details">Service Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/project">
              Projects
              <i className="fa-regular fa-plus" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/project">Projects</Link>
              </li>
              <li>
                <Link href="/project-details">Project Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/news">
              News
              <i className="fa-regular fa-plus" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/news-grid">News Grid</Link>
              </li>
              <li>
                <Link href="/news">News Standard</Link>
              </li>
              <li>
                <Link href="/news-details">News Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
