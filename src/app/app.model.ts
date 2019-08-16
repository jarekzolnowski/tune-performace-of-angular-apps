export type Post = Readonly<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>;

export type User = Readonly<{
  name: string;
}>;

