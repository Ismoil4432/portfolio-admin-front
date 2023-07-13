<template>
    <div class="p-3">
        <div class="flex justify-between items-center">
            <h2 class="uppercase dark:text-white text-gray-900 text-2xl font-bold">Projects</h2>
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <button @click="toggleModal" type="button" class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2">
                    ADD
                </button>
            </div>
        </div>
        <!-- Main modal -->
        <div tabindex="-1" aria-hidden="true" class="overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? '' : 'hidden'">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            <span v-if="!isUpdate">My project</span>
                            <span v-else>Update project</span>
                        </h3>
                        <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form >
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="project_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project name</label>
                                <input v-model="contactInfo.project_name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project name" required="">
                            </div>
                            <div>
                                <label for="project_link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project link</label>
                                <input v-model="contactInfo.project_link" type="text" name="project_link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="http://.com" required="">
                            </div>
                            <div>
                                <label for="link_github_project" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github link</label>
                                <input v-model="contactInfo.link_github_project" type="text" name="link_github_project" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github.com" required="">
                            </div>
                            <div>
                                <label for="project_img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project image link</label>
                                <input v-model="contactInfo.project_img" type="text" name="project_img" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="project image_link" required="">
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea v-model="contactInfo.description" name="description" id="description" cols="30" rows="10" placeholder="Briefly about my project!" class="w-full h-36 border outline-none border-gray-300 bg-white text-black rounded-lg block p-3"></textarea>
                            </div>
                        </div>
                        <div class="flex justify-end items-center">
                            <button v-if="!isUpdate" @click="addContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Create
                            </button>
                            <button v-else @click="modifyContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- -------------------------end of modal------------------------------------- -->
    
        <section class=" p-0 sm:p-5 md:p-0 md:py-4 mt-10">
        <!-- ------------------------table-------------------------------------------- -->
        <div class="w-full xl px-0 lg:p-0">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm table-auto">
                        <thead class="text-md text-white font-bold uppercase bg-gray-500 ">
                            <tr class="text-left">
                                <th scope="col" class="px-4 py-3">Name</th>
                                <th scope="col" class="px-4 py-3">Description</th>
                                <th scope="col" class="px-4 py-3">Project link</th>
                                <th scope="col" class="px-4 py-3">Github link</th>
                                <th scope="col" class="px-4 py-3">Project image</th>
                                <th scope="col" class="px-10 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="el in computedList" :key="el.id" class="border-b dark:border-gray-700">
                                <td class="px-4 py-3">{{el.project_name}}</td>
                                <td class="px-4 py-3">{{el.description}}</td>
                                <td class="px-4 py-3">{{el.project_link}}</td>
                                <td class="px-4 py-3">{{el.link_github_project}}</td>
                                <td class="px-4 py-3"><img :src="el.project_img" alt="" class="w-[10%]"></td>
                                <td class="px-4 py-3 text-[20px]">
                                    <div  class="bg-white  flex justify-end items-center">
                                        <button @click="showModal(el.id)" >
                                            <div class="w-6 h-6 py-1 rounded-md bg-red-500 mr-4 cursor-pointer">
                                                <i class="bx bx-trash text-white text-[16px] flex items-center justify-center"></i>
                                            </div>
                                        </button>
                                        <button @click="updateContact(el.id)">
                                            <div class="w-6 h-6 py-1 rounded-md bg-blue-500 mr-4 cursor-pointer">
                                                <i class="bx bx-task text-white text-[16px] flex items-center justify-center"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                         </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- -------------------------end of table------------------------------------- -->
       
        <Modal v-if="isShowModal" @close="closeModal" >
                <template #header>
                    <div class="  flex items-center text-lg text-red-600 font-extrabold ">
                        Warning!
                    </div>
                </template>
                <template #body>
                    <p class="text-base leading-relaxed">
                        Do you want to delete?
                    </p>
                </template>
                <template #footer>
                    <div class="flex justify-end gap-6">
                        <button @click="removeContact" type="button" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            Yes
                        </button>
                        <button @click="closeModal" type="button" class="text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 ">
                            No
                        </button>
                    </div>
                </template>                       
            </Modal>
        </section>   
      </div>
  </template>
  
  <script setup>
    import {ref, reactive, computed, onMounted} from 'vue'
    import { projectStore } from '../../stores/projectStore';
    import { useProject } from '../../service/project';
    import {useRouter} from 'vue-router'
    import { Modal } from 'flowbite-vue'

    const isShowModal = ref(false)
    function closeModal() {
    isShowModal.value = false
    localStorage.removeItem('delete_id')
    }

    function showModal(delete_id) {
        localStorage.setItem('delete_id', delete_id)
        isShowModal.value = true
    }

    const router = useRouter();
    const store = projectStore();
    const modal = ref(false);
    const isUpdate = ref(false);
    let computedList = ref([])

    const contactInfo = reactive({
        project_name: '',
        description: '',
        project_link: '',
        link_github_project: '',
        project_img: ''
    })
    console.log(contactInfo.project_name)
    const toggleModal = () => {
        if(modal.value){
            isUpdate.value = false
            contactInfo.project_name = ''
            contactInfo.description = ''
            contactInfo.project_link = ''
            contactInfo.link_github_project = ''
            contactInfo.project_img = ''
        }
        modal.value = !modal.value
    }

    const updateList = () => {
        useProject.list().then((res)=>{
            store.state.list = res.data    
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }else{
            console.log(error);

            }
        })
    }

    const addContact=(evet)=>{
        evet.preventDefault();
        const contact = {
            project_name: contactInfo.project_name,
            description: contactInfo.description,
            project_link: contactInfo.project_link,
            link_github_project: contactInfo.link_github_project,
            project_img: contactInfo.project_img,
        }

        useProject.create(contact).then((res)=>{
            if(res.status == 201){
                contactInfo.project_name = ''
                contactInfo.description = ''
                contactInfo.project_link = ''
                contactInfo.link_github_project = ''
                contactInfo.project_img = ''
                toggleModal()
                updateList();
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            console.log(error);
        })
    }

    const modifyContact=(event)=>{
        event.preventDefault();
        const id  = localStorage.getItem('id')
        const contact = {
            project_name: contactInfo.project_name,
            description: contactInfo.description,
            project_link: contactInfo.project_link,
            link_github_project: contactInfo.link_github_project,
            project_img: contactInfo.project_img
        }

        useProject.update(id, contact).then((res)=>{
            if(res.status == 200){
                contactInfo.project_name=''
                contactInfo.description=''
                contactInfo.project_link=''
                contactInfo.link_github_project=''
                contactInfo.project_img=''
                isUpdate.value = false;
                updateList();
                toggleModal()
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            console.log(error);

        })
    }

    const removeContact=()=>{
        const id = localStorage.getItem('delete_id')
        console.log(id);
        useProject.remove(id).then((res)=>{
            if(res.status == 200){
                updateList();
                closeModal()
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    const updateContact = (id)=>{
        localStorage.setItem('id', id)
        isUpdate.value = true;
        const foundContact = store.findOne(id)
        contactInfo.project_name = foundContact[0].project_name
        contactInfo.description = foundContact[0].description
        contactInfo.project_link = foundContact[0].project_link
        contactInfo.link_github_project = foundContact[0].link_github_project
        contactInfo.project_img = foundContact[0].project_img
        toggleModal();
    }

    computedList = computed(()=> {
        return store.state.list;
    })
    console.log(computedList)
    onMounted(()=>{
        updateList()
    })
  </script>
  
  <style lang="scss" scoped></style>
  