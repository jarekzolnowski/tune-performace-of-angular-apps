export type Post = Readonly<{
  userId: number;
  id: number;
  title: string;
  body: string;
  status: number;
}>;

export type User = Readonly<{
  name: string;
}>;
