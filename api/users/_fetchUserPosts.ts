import axios from "axios";

export const fetchUserPosts = async (userId: number) => {
  try {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = result.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};