import { FeedResponseInterface } from 'src/app/shared/types/feedResponseInterface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: FeedResponseInterface | null;
}
