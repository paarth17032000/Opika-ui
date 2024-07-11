"use client";
import { useEffect, useState } from "react";
import { fetchUserDetails } from "@/api/users/_fetchUserDetails";
import { fetchUserPosts } from "@/api/users/_fetchUserPosts";
import { useGlobalContext } from "@/context/useContext";

interface IUserPost {
  id: number;
  title: string;
  body: string;
};

interface IUserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
} 

export default function User({ params }: { params: { user: string } }) {
  const { user: userId } = params;
  const { setOpenLoader } = useGlobalContext();
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
  const [userPosts, setUserPosts] = useState<IUserPost[]>([]);
  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await fetchUserDetails(userId);
      const userPosts = await fetchUserPosts(userId);
      setUserDetails(userData);
      setUserPosts(userPosts);
    };
    setOpenLoader(true)
    getUserDetails();
    setOpenLoader(false)
  }, []);
  return (
    <main className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-between px-10 md:px-24 py-10">
      {userDetails != null && userDetails.id && (
        <div className="max-w-6xl w-full text-sm">
          <div>
            <div className="text-2xl font-[500]">{userDetails.name}</div>
            <div className="text-white/90 text-lg mt-1">
              @{userDetails.username}
            </div>
            <div className="text-white text-lg mt-1">
              Email : {userDetails.email}
            </div>
            <div className="text-white text-lg mt-1">
              Phone : {userDetails.phone.slice(0, 12)}
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <div className="font-bold text-xl">User Posts</div>
            <div className="z-10 max-w-6xl w-full text-sm  grid md:grid-cols-2 grid-cols-1 gap-4">
              {userPosts.length > 0 &&
                userPosts.map((postObj) => (
                  <div
                    key={postObj.id}
                    className="group rounded-lg px-5 py-4 border border-white/90 dark:border-neutral-700 dark:bg-neutral-800/30"
                  >
                    <div className="text-white/90 font-[500] text-lg uppercase">
                      {postObj.title}
                    </div>
                    <div className="text-white mt-2 text-md">
                      {postObj.body}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
