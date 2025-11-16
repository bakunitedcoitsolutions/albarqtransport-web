import Link from "next/link";

const menuLinks = [
  {
    href: "/",
    name: "Home",
    navItemClass: "active menu-thumb",
  },
  {
    href: "/about",
    name: "About Us",
    navItemClass: "has-dropdown",
    submenu: [
      {
        href: "/about/our-company",
        name: "Our Company",
      },
      {
        href: "/about/our-clients",
        name: "Our Clients",
      },
    ],
  },
  {
    href: "/services",
    name: "Services",
    submenu: [
      {
        href: "/services/water",
        name: "Water",
      },
      {
        href: "/services/transportation",
        name: "Transportation",
      },
      {
        href: "/services/lowbed",
        name: "Lowbed",
      },
    ],
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/certificates",
    name: "Certificates",
  },
  {
    href: "/contact-us",
    name: "Contact Us",
  },
];

export default function Menu() {
  return (
    <>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          {menuLinks.map((link) => (
            <li key={link.href} className={link.navItemClass}>
              <Link href={link.href}>
                {link.name}
                {link?.submenu && link?.submenu?.length > 0 && (
                  <i className="fa-regular fa-plus" />
                )}
              </Link>
              {link?.submenu && link?.submenu?.length > 0 && (
                <ul className="submenu">
                  {link?.submenu?.map((sublink) => (
                    <li key={sublink.href}>
                      <Link href={sublink.href}>{sublink.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
