export type AddBookPayloadType = {
  title: string;
  description: string;
  type: number;
  releaseDate: Date | null;
  coverImage: string;
  actors: { name: string }[];
};
