"use client";

import { fetchUsers } from "@/api/users/_fetchUsers";
import { useGlobalContext } from "@/context/useContext";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Users {
  id: string;
  name: string;
  email: string;
  username: string;
}

export default function Home() {
  const { setOpenLoader } = useGlobalContext();
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    setOpenLoader(true)
    const getUsersData = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setOpenLoader(false)
    };
    getUsersData();
  }, []);
  return (
    <main className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-between px-24 py-10">
      <div className="max-w-6xl w-full text-sm  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
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
    </main>
  );
}
