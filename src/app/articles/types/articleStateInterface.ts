import { ArticleResponseInterface } from 'src/app/shared/types/articleResponseInterface';

export interface ArticleStateInterface {
  error: string | null;
  isLoading: boolean;
  data: ArticleResponseInterface | null;
}
