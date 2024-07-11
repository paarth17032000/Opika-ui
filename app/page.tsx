"use client";
import Link from "next/link";
import { useGlobalContext } from "@/context/useContext";

export default function Home() {
  const { users, setIsOpenAddPostModal } = useGlobalContext();
  return (
    <main className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-between md:px-24 px-10 py-10">
      <div className="max-w-6xl">
        <div className="flex items-center justify-end w-full my-4 ">
          <div
            onClick={() => setIsOpenAddPostModal(true)}
            className="bg-white hover:bg-white/90 rounded-[16px] px-4 font-[500] py-1.5 text-black w-fit cursor-pointer"
          >
            Add Post
          </div>
        </div>
        <div className="w-full text-sm grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          {users.length > 0 &&
            users.map((userObj) => (
              <Link
                href={`/user/${userObj.id}`}
                key={userObj.id}
                className="group cursor-pointer rounded-lg px-5 py-4 border border-white/90 dark:border-neutral-700 dark:bg-neutral-800/30"
              >
                <div className="text-white text-xl">{userObj.name}</div>
                <div className="text-white/90 text-md">{userObj.username}</div>
                <div className="text-white text-md">{userObj.email}</div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
