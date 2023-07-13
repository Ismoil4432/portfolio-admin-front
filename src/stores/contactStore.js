import {ref, computed, reactive} from 'vue'
import {defineStore} from 'pinia'

export const contactStore  = defineStore('aboute_me', ()=>{
    
    const state = reactive({
        list: [],
        load: true,
        errorMessage: "",
    })

    const findOne = (id)=>{
        return state.list.filter(el => el.id == id)
    }
    return {state, findOne}
})