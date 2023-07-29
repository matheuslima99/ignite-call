import NextAuth from "next-auth"

declare module "next-auth" {

  interface User {
    id: string;
    username: string;
    fullname: string;
    email: string;
    avatar_url: string;
  }

  interface Session {
    user: User;
  }
}