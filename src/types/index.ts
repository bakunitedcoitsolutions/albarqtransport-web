import { ReactNode } from "react";

export interface LayoutProps {
  headerStyle?: number | null;
  footerStyle?: number | null;
  breadcrumbTitle?: string;
  children: ReactNode;
}

export interface HeaderProps {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  isOffCanvas: boolean;
  handleOffCanvas: () => void;
  isSearch: boolean;
  handleSearch: () => void;
}

export interface OffcanvasProps {
  isOffCanvas: boolean;
  handleOffCanvas: () => void;
}

export interface SearchProps {
  isSearch: boolean;
  handleSearch: () => void;
}

export interface BreadcrumbProps {
  breadcrumbTitle: string;
}

export interface BackToTopProps {
  target: string;
}

declare global {
  interface Window {
    wow?: {
      init: () => void;
    };
  }
}
