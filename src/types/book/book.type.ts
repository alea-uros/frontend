import { BookTypeEnum } from '../../enum/book/book-type.enum';
import { ActorsType } from '../actors/actors.type';
import { UserType } from '../user/user.type';
import { RatingType } from '../rating/rating.type';

export type BookType = {
  id: string;
  title: string;
  description: string;
  type: BookTypeEnum;
  releaseDate: string;
  coverImage: 'string';
  actors: ActorsType[];
  averageRating: number;
  user: UserType;
  ratings: RatingType[];
};
