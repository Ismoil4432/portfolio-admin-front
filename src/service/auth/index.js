import axios from '../axios'


export const useAuth = (user) => axios.post("/admin/signin", user)