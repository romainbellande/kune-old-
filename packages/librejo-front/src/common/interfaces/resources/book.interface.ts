export default interface Book {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  externalId: string;
  userId: string;
  title: string;
  authors: string[];
  thumbnail: string;
}
