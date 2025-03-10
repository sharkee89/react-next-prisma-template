import { redirect } from 'next/navigation';
import { signOut } from "@/app/auth/actions/sign-out";
import { getAuth } from "@/app/auth/cookie";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";
import '../styles/admin.scss';

export default async function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getAuth();

  if (!user) {
    redirect('/sign-in');
  }

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
  );
}