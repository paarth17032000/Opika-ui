import { toastMessage } from "@/components/Toast/toastMessage";
import axios from "axios";

export const fetchUsers = async () => {
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = result.data;
    toastMessage('Users Fetched Successfully', 'success')
    return data;
  } catch (err) {
    console.log(err);
    toastMessage('Users API Failed!', 'error')
  }
};
