import axios from "axios";

export const fetchUsers = async () => {
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = result.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
