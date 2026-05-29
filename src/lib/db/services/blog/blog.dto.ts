export interface BlogInterface {
  id: number;
  mainImage: string;
  titleEn: string;
  titleAr: string;
  typeEn: string;
  typeAr: string;
  date: string;
  descriptiveHeadingEn1: string | null;
  descriptiveHeadingAr1: string | null;
  descriptionEn1: string | null;
  descriptionAr1: string | null;
  picture2: string | null;
  picture3: string | null;
  descriptiveHeadingEn2: string | null;
  descriptiveHeadingAr2: string | null;
  descriptionEn2: string | null;
  descriptionAr2: string | null;
  testimonialEn: string | null;
  testimonialAr: string | null;
  reviewerNameEn: string | null;
  reviewerNameAr: string | null;
  displayOrderKey: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
