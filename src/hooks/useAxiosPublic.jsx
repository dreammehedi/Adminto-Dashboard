import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://adminto-dashboard-server.vercel.app/api",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
