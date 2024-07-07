import axios from "axios";
 
export const fetchUserDetails = async (userId: number) => {
  try {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = result.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
