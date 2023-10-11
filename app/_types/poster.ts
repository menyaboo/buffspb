export interface Poster {
  id: number,
  title: string,
  author: string,
  premierStatus: boolean,
  photo: string,
  date: Date,
  price: number,
  sceneId: number,
  isPushkinCard: boolean;
}