import { RiTwitterXFill } from "react-icons/ri";
import { FaHardHat } from "react-icons/fa";
import { MdPlumbing } from "react-icons/md";
import { IoSettingsOutline, IoWaterOutline } from "react-icons/io5";
import {
  GiElectric,
  GiPaintRoller,
  GiMineTruck,
  GiMetalBar,
  GiFireExtinguisher,
} from "react-icons/gi";

export const thmPrimary = "#0e4563";
export const thmSecondary = "#15b5e5";
export const EMAIL = "info@albarqtransport.com";
export const PHONE = "+966 50 119 8042";
export const ADDRESS =
  "Jeddah - Al-Safa District - Ahmed Bin Al-Banna Street - Postal Code: 23453 - Supplemental Number: 4469";
export const ADDRESS_AR =
  "جدة - حي الصفا - شارع أحمد بن البناء - الرمز البريدي: 23453 - الرقم الإضافي: 4469";
export const FACEBOOK = "https://www.facebook.com/bakunited";
export const LINKEDIN =
  "https://www.linkedin.com/company/bak-united-contracting";
export const YOUTUBE = "https://www.youtube.com/@bakunited";
export const INSTAGRAM = "https://www.instagram.com";
export const TWITTER = "https://www.twitter.com";
export const TIKTOK = "https://www.tiktok.com";
export const SOCIALS = [
  {
    id: "social-facebook",
    icon: "fab fa-facebook-f",
    url: FACEBOOK,
  },
  {
    id: "social-linkedin",
    icon: "fa-brands fa-linkedin-in",
    url: LINKEDIN,
  },
  {
    id: "social-youtube",
    icon: "fa-brands fa-youtube",
    url: YOUTUBE,
  },
  {
    id: "social-instagram",
    icon: "fab fa-instagram",
    url: INSTAGRAM,
  },
  {
    id: "social-twitter",
    icon: RiTwitterXFill,
    url: TWITTER,
  },
  {
    id: "social-tiktok",
    icon: "fa-brands fa-tiktok",
    url: TIKTOK,
  },
];

export const SERVICES_LINKS = [
  "/services/excavation",
  "/services/shoring",
  "/services/water-proofing",
  "/services/structure-work",
  "/services/steel-structure",
  "/services/mechanical",
  "/services/electrical",
  "/services/plumbing",
  "/services/fire-fighting",
  "/services/finishing-work",
];

export const SERVICES_ICONS = [
  <span key="excavation" className="react-icon-wrapper">
    <GiMineTruck size={60} />
  </span>,
  <span key="shoring" className="react-icon-wrapper">
    <FaHardHat size={60} />
  </span>,
  <span key="waterproofing" className="react-icon-wrapper">
    <IoWaterOutline size={60} />
  </span>,
  <span key="structure" className="icon-construction-machine"></span>,
  <span key="steel-structure" className="react-icon-wrapper">
    <GiMetalBar size={60} />
  </span>,
  <span key="mechanical" className="react-icon-wrapper">
    <IoSettingsOutline size={60} />
  </span>,
  <span key="electrical" className="react-icon-wrapper">
    <GiElectric size={60} />
  </span>,
  <span key="plumbing" className="react-icon-wrapper">
    <MdPlumbing size={60} />
  </span>,
  <span key="fire-fighting" className="react-icon-wrapper">
    <GiFireExtinguisher size={60} />
  </span>,
  <span key="finishing" className="react-icon-wrapper">
    <GiPaintRoller size={60} />
  </span>,
];

export const EXCAVATION_IMAGES = [
  "/assets/img/bak/services/excavation-1.jpeg",
  "/assets/img/bak/services/excavation-2.jpg",
];

export const SHORING_IMAGES = [
  "/assets/img/bak/services/shoring-1.png",
  "/assets/img/bak/services/shoring-2.jpg",
];

export const WATER_PROOFING_IMAGES = [
  "/assets/img/bak/services/water-proofing-1.jpg",
  "/assets/img/bak/services/water-proofing-2.jpeg",
];

export const STRUCTURE_WORK_IMAGES = [
  "/assets/img/bak/services/structure-work-1.jpg",
  "/assets/img/bak/services/structure-work-2.jpg",
];

export const STEEL_STRUCTURE_IMAGES = [
  "/assets/img/bak/services/steel-structure-1.png",
  "/assets/img/bak/services/steel-structure-2.png",
];

export const MECHANICAL_IMAGES = [
  "/assets/img/bak/services/mechanical-1.png",
  "/assets/img/bak/services/mechanical-2.png",
];

export const ELECTRICAL_IMAGES = [
  "/assets/img/bak/services/electrical-1.png",
  "/assets/img/bak/services/electrical-2.png",
];

export const PLUMBING_IMAGES = [
  "/assets/img/bak/services/plumbing-1.png",
  "/assets/img/bak/services/plumbing-2.png",
];

export const FIRE_FIGHTING_IMAGES = [
  "/assets/img/bak/services/fire-fighting-1.jpg",
  "/assets/img/bak/services/fire-fighting-2.jpg",
];

export const FINISHING_WORK_IMAGES = [
  "/assets/img/bak/services/finishing-work-1.png",
  "/assets/img/bak/services/finishing-work-2.png",
];
