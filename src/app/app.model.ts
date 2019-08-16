export type Post = Readonly<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>;

export type User = Readonly<{
  name: string;
}>;

export type UserResponse = Readonly<{
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string
}>;
