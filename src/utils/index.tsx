import { RiTwitterXFill } from "react-icons/ri";

export const thmPrimary = "#0e4563";
export const thmSecondary = "#15b5e5";
export const EMAIL = "info@albarqtransport.com";
export const PHONE = "+966 50 119 8042";
export const ADDRESS =
  "JDSA7222، 7222 عبدالله البستاني، 5189, Al-Safa, Jeddah 23453, Saudi Arabia - Supplemental Number: 4469";
export const ADDRESS_AR = ADDRESS;
export const FACEBOOK = "https://www.facebook.com/bakunited";
export const LINKEDIN =
  "https://www.linkedin.com/company/bak-united-contracting";
export const YOUTUBE = "https://www.youtube.com/@albarqtransport";
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

export interface ServiceItem {
  href: string;
  translationKey: string;
  homeImage: string;
}

export interface ClientItem {
  id: number;
  name: string;
  translationKey: string;
  image: string;
  link: string;
}

export const SERVICES: ServiceItem[] = [
  {
    href: "/services/sand",
    translationKey: "menu.sand",
    homeImage: "/assets/img/albarq/services/home/sand-supply.jpg",
  },
  {
    href: "/services/heavy-equipment-rental",
    translationKey: "menu.heavyEquipmentRental",
    homeImage: "/assets/img/albarq/services/home/heavy-equipment.jpg",
  },
  {
    href: "/services/aggregate",
    translationKey: "menu.aggregate",
    homeImage: "/assets/img/albarq/services/home/aggregate-supply.jpg",
  },
  {
    href: "/services/stone",
    translationKey: "menu.stone",
    homeImage: "/assets/img/albarq/services/home/stone-supply.jpg",
  },
  {
    href: "/services/sub-base",
    translationKey: "menu.subBase",
    homeImage: "/assets/img/albarq/services/home/sub-base-supply.jpg",
  },
  {
    href: "/services/soil",
    translationKey: "menu.soil",
    homeImage: "/assets/img/albarq/services/home/soil-supply.jpg",
  },
  {
    href: "/services/drinking-water",
    translationKey: "menu.drinkingWater",
    homeImage: "/assets/img/albarq/services/home/drinking-water-supply.jpg",
  },
  {
    href: "/services/waste-water",
    translationKey: "menu.wasteWater",
    homeImage: "/assets/img/albarq/services/home/waste-water-truck.jpg",
  },
  {
    href: "/services/lowbed",
    translationKey: "menu.lowbed",
    homeImage: "/assets/img/albarq/services/home/lowbed.jpg",
  },
  {
    href: "/services/flatbed",
    translationKey: "menu.flatbed",
    homeImage: "/assets/img/albarq/services/home/flatbed.jpg",
  },
  {
    href: "/services/waste-removal",
    translationKey: "menu.wasteRemoval",
    homeImage: "/assets/img/albarq/services/home/waste-removal-truck.jpg",
  },
];

export const ALL_CERTIFICATES = [
  {
    id: 1,
    image: "/assets/img/albarq/certificates/cert-1.png",
    link: "/assets/pdf/1-Al-Barq-Commercial-Activity-Lisence.pdf",
  },
  {
    id: 2,
    image: "/assets/img/albarq/certificates/cert-2.png",
    link: "/assets/pdf/2-CR-New.pdf",
  },
  {
    id: 3,
    image: "/assets/img/albarq/certificates/cert-3.png",
    link: "/assets/pdf/3-Certificate-GOSI-barq-30-Sep-2024.pdf",
  },
  {
    id: 4,
    image: "/assets/img/albarq/certificates/cert-4.png",
    link: "/assets/pdf/4.pdf",
  },
  {
    id: 5,
    image: "/assets/img/albarq/certificates/cert-5.png",
    link: "/assets/pdf/5-Mawan-13-Trucks-003732.pdf",
  },
  {
    id: 6,
    image: "/assets/img/albarq/certificates/cert-6.png",
    link: "/assets/pdf/6-Mawan-25-Trucks-003833.pdf",
  },
  {
    id: 8,
    image: "/assets/img/albarq/certificates/cert-8-1.png",
    link: "/assets/pdf/8-Madinati.pdf",
  },
  {
    id: 9,
    image: "/assets/img/albarq/certificates/cert-8-2.png",
    link: "/assets/pdf/8-Madinati.pdf",
  },
  {
    id: 7,
    image: "/assets/img/albarq/certificates/cert-7.png",
    link: "/assets/pdf/7.pdf",
  },
  {
    id: 10,
    image: "/assets/img/albarq/certificates/cert-9.png",
    link: "/assets/pdf/9.pdf",
  },
  {
    id: 13,
    image: "/assets/img/albarq/certificates/cert-10.png",
    link: "/assets/pdf/10.pdf",
  },
];

export const ALL_CLIENTS: ClientItem[] = [
  {
    id: 1,
    name: "",
    translationKey: "clients.client1.name",
    image: "/assets/img/albarq/clients/client-1.jpeg",
    link: "https://readymix.sa/ar/saudi/riyadh/riyadh/unibeton-readymix-riyadh.html",
  },
  {
    id: 2,
    name: "",
    translationKey: "clients.client2.name",
    image: "/assets/img/albarq/clients/client-2.jpeg",
    link: "https://www.marzuk.org/",
  },
  {
    id: 3,
    name: "",
    translationKey: "clients.client3.name",
    image: "/assets/img/albarq/clients/client-3.jpeg",
    link: "https://kifahreadymix.com/?lang=ar",
  },
  {
    id: 4,
    name: "",
    translationKey: "clients.client4.name",
    image: "/assets/img/albarq/clients/client-4.jpeg",
    link: "https://premcoreadymix.wixsite.com/website",
  },
];
