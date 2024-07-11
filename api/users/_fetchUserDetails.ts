import { toastMessage } from "@/components/Toast/toastMessage";
import axios from "axios";
 
export const fetchUserDetails = async (userId: string) => {
  try {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = result.data;
    toastMessage('Users Details Fetched Successfully', 'success')
    return data;
  } catch (err) {
    console.log(err);
    toastMessage('Users Details API Failed!', 'error')
  }
};
