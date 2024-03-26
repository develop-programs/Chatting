import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Auth } from "@/services/database/models/User.model";
import { connect } from "@/services/database/connection";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connect();
        if (!credentials) return null;
        const user = await Auth.findOne({ phone: credentials.username });
        const validate = bcrypt.compareSync(
          credentials.password,
          user?.password
        );
        if (validate) {
          console.log(user);

          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/api/auth/signIn",
    newUser: "",
  },
};

export default authOptions;
