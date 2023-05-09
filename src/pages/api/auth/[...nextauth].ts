import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
// import type { Account, Profile, User } from 'next-auth';
// import type { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient({ log: ['query', 'error'] });

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  // callbacks: {
  //   signIn: async (params: {
  //     user: AdapterUser | User;
  //     account: Account | null;
  //     profile?: Profile;
  //   }): Promise<string | boolean> => {
  //     // ユーザーがデータベースに存在するか確認
  //     const existingUser = await prisma.user.findUnique({
  //       where: { email: params.user.email ?? undefined },
  //     });

  //     // ユーザーが存在しない場合、新規アカウント作成ページにリダイレクト
  //     if (!existingUser) {
  //       console.log(prisma);
  //       return '/sign-in/create-account' || '';
  //     }

  //     // ユーザーが存在する場合、サインインを許可
  //     return true;
  //   },
  // },
});
