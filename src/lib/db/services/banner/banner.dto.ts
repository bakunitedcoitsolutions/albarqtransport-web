export interface BannerInterface {
  id: number;
  picture: string | null;
  subHeadingEn: string | null;
  subHeadingAr: string | null;
  headingEn: string;
  headingAr: string;
  link: string;
  buttonTextEn: string | null;
  buttonTextAr: string | null;
  videoLink: string | null;
  displayOrderKey?: number | null;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
