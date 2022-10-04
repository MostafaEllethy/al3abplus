import { Category, Provider } from "@prisma/client";

export interface GameBasicInfo {
  id: number;
  imageUrl: string;
  title: string;
  path: string;
  mobileReady: boolean;
}

export interface GameDetails {
  id: number;
  category: Category;
  title: string;
  provider: Provider;
  path: string;
  description: string;
  iFrameLink: string;
  imageUrl: string;
  mobileReady: boolean;
}
