import { ClientInterface } from "../client";

export interface ReviewInterface {
  id: number;
  clientId: number;
  nameEn: string;
  nameAr: string;
  designationEn: string;
  designationAr: string;
  reviewEn: string;
  reviewAr: string;
  displayOrderKey: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  client?: ClientInterface;
}
