import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import sanityClient from "./sanity";
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    }),
    SanityCredentials(sanityClient) // take the client
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObj = await sanityClient.fetch<{ _id:string}>(`*[_type == "user" && email ==$email][0]{
        _id

        } `,{email:userEmail}
        
      )
      return{
        ...session,
        user:{
          ...session.user,
          id: userIdObj._id
        }
      }

    }
  },
};
// cấu hình cho next-auth, một thư viện quản lý xác thực trong nextjs
// cấu hình các provider (nhà cung cấp dịch vụ đăng nhập) và tích hợp sanity
// thông qua sanityadapter và sanitycredentials
// sanitycredentials: cho phép đăng nhập bằng thông tin xác thực được lưu trữ trong sanity
// adapter: kết nối nextauth vs sanity cms, nơi lưu trữ dữ liệu người dùng và phiên đăng nhập
