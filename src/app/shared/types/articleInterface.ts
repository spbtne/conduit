import { ProfileInterface } from './profileInterface';

export interface ArticleInterface {
  slug: string;
  title: string;
  description: string;
  body: string;
  createAt: string;
  updatedAt: string;
  tagList: string[];
  author: ProfileInterface;
  favoritesCount: number;
  favorited: boolean;
}
