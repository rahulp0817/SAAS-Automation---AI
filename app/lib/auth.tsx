import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Fullname", type: "text", placeholder: "Alice Joe" },
        email: { label: "Email", type: "text", placeholder: "Alice@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Alice@123",
        },
      },
      async authorize(credentials: any) {
        // Add your own authentication logic here
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
