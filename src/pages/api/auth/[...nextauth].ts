import { PrismaAdapter } from '@next-auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'
import NextAuth from 'next-auth'
// import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient;

export default NextAuth({
  providers: [
    // CredentialsProvider({
    //   // name: "",
    //   credentials: {
    //     username: { label: "ユーザー名", type: "text", placeholder: "ユーザー名" },
    //     password: {  label: "パスワード", type: "password" }
    //   },
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   async authorize(credentials, req) {
    //     const username = credentials?.username
    //     const password = credentials?.password

    //     // データベースからユーザー情報を取得
    //     const user = await prisma.user.findUnique({
    //       where: { username: username },
    //     })

    //     if (user && user.password === password) {
    //       // パスワードが一致した場合、ユーザーオブジェクトを返す
    //       return { id: user.id, name: user.name, email: user.email }
    //     } else {
    //       // 一致しない場合、NULLを返す
    //       return null
    //     }
    //   }
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
})