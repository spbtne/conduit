import { ArticleStateInterface } from 'src/app/articles/types/articleStateInterface';
import { FeedStateInterface } from 'src/app/globalFeed/types/feedStateInterface';
import { AuthStateInterface } from '../../auth/components/types/authState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popularTagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  articles: ArticleStateInterface;
}
