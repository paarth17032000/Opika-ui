import { toastMessage } from "@/components/Toast/toastMessage";
import axios from "axios";

export const fetchUserPosts = async (userId: string) => {
  try {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = result.data;
    toastMessage('User Posts Fetched Successfully', 'success')
    return data;
  } catch (err) {
    console.log(err);
    toastMessage('User Posts API Failed!', 'error')
  }
};