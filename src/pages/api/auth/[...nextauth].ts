import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "~/lib/prisma";

const options = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
};

export default function handler(req, res): NextApiHandler {
  return NextAuth(req, res, options);
}
