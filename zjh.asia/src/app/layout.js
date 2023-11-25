import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zjh.asia',
  description: 'homepage of zjh.asia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule" sizes="any" />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
