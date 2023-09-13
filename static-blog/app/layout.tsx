import Link from "next/link"
import Head from "./head"
import "../styles/globals.css"
import Image from "next/image"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const header = (
  <header>
    <div className="text-center bg-yellow-200 p-8  my-6 rounded-xl">
     <Image src="/logo.png" width={50} height={50} alt="logo" className="mx-auto"  />
     
      <Link href="/">
      <h1 className="text-3xl text-violet-700 font-bold ">Yemre's Blog </h1>
      </Link>
      <h1> 👊 Welcome To My Tech Blog 💻 </h1>
    </div>  
  </header>
)
const footer = (
  <footer>
    <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
    <br />
    <h3>Develop by Yemresalcan</h3>
    </div>
  </footer>

)


  return (
    <html lang="en">
      <Head/>
       <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
           </div>
        </body>
    </html>
  )
}
