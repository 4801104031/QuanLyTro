'use client' // chạy trên trình duyệt thay vì server

import { SessionProvider } from "next-auth/react"
import React from "react"

type Props = {  // định nghĩa kiểu dữ liệu cho Props
    children: React.ReactNode; // kiểu của dữ liệu của children, có thể là bất cứ thứ gì
}
export const NextAuthProvider = ({children} : Props) => {
    return <SessionProvider>{children}</SessionProvider>
}

// định nghĩa một provider (thành phần bao bọc)
// session provider: duy trì trạng thái đăng nhập trên toàn ứng dụng
// cho phép các thành phần con truy cập thông tin về phiên mà ko cần truyền từng prop xuống.
