export interface BannerInterface {
  id: number;
  picture: string | null;
  displayOrderKey?: number | null;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
