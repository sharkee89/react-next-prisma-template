import { getAuth } from "./auth/cookie";
import { signOut } from "@/app/auth/actions/sign-out";
import Link from "next/link";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getAuth();

  const authNav = user ? (
    <li>
      <form action={signOut}>
        <button
          type="submit"
          className="text-lightblue-500 hover:text-lightblue-400"
        >
          Sign Out
        </button>
      </form>
    </li>
  ) : (
    <>
      <li>
        <Link href="/sign-up" className="text-lightblue-500 hover:text-lightblue-400">
          Sign Up
        </Link>
      </li>
      <li>
        <Link href="/sign-in" className="text-lightblue-500 hover:text-lightblue-400">
          Sign In
        </Link>
      </li>
    </>
  );

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-gray-900 text-gray-100`}>
        <div className="flex">
          {/* Sidebar */}

          {user && <Navbar user={user} />}

          {/* Content Area */}
          <div className="flex-1 ml-0 sm:ml-64">
            <nav className="fixed top-0 left-0 w-full p-4 bg-gray-800 shadow-md z-50">
              <div className="flex justify-between items-center">
                <button
                  className="text-white text-2xl"
                >
                  {/* <span className="sm:hidden ">&#9776;</span> */}
                </button>
                <div className="flex space-x-6">
                  {authNav}
                </div>
              </div>
            </nav>
            <hr className="border-gray-600" />
            <main className="p-4 mt-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}