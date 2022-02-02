import { FeedStateInterface } from 'src/app/globalFeed/types/feedStateInterface';
import { AuthStateInterface } from '../../auth/components/types/authState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
