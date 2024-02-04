import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

apiCall.defaults.headers.common.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjkxYjM3NWYzOGNkYWE0OTcyMGFjNzgxNzAyNzhkNiIsInN1YiI6IjY1MmNlZDAwNzJjMTNlMDEzZDE2NDRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H_QrexwI0fQRtGdmODwUlysiRV1FUm6Sj-J6MohxLMc"

export default apiCall;
