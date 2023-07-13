import axios from '../axios'


export const useRegistration = {
    create: (user) => axios.post("/admin/signup", user, {
        // headers:{
        //     "Authorization": `Bearer ${localStorage.getItem('token')}`
        // }
    })
}